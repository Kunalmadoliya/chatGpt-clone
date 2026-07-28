"use client";
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useQueryClient } from '@tanstack/react-query';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { useChat } from "@ai-sdk/react";
import React, { useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useConversation } from '../hooks/use-conversation';
import { queryKeys } from '../utils/query-keys';
import { toast } from 'sonner';
import { ChatEmpty } from './chat-empty';
import { ChatMessages } from './chat-messages';
import { ChatComposer } from './chat-composer';

type ConversationViewProps = {
    conversationId: string;
    initialMessages: UIMessage[];
    initialText?: string;
};

/**
 * Main chat view — header, message list (or empty state), and composer with streaming.
 */
export const ConversationView = ({ conversationId, initialMessages, initialText }: ConversationViewProps) => {

    const queryClient = useQueryClient();
    const router = useRouter();
    const { data: conversations } = useConversation();

    // Track whether we've already fired the initial auto-send for this mount.
    const hasSentInitial = useRef(false);

    const transport = useMemo(() => new DefaultChatTransport({
        api: "/api/chat",
        prepareSendMessagesRequest: ({ id, messages }) => ({
            body: {
                id, message: messages.at(-1)
            }
        })
    }), []);

    const { messages, sendMessage, status } = useChat({
        id: conversationId,
        messages: initialMessages,
        transport,
        onFinish: () => {
            void queryClient.invalidateQueries({
                queryKey: queryKeys.conversations.all,
            });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    /**
     * Auto-send the first message when navigated from the /c home screen.
     * Runs only once per mount (guarded by hasSentInitial ref).
     * After sending, strips the ?initial= param from the URL so a refresh
     * doesn't retrigger this effect.
     */
    useEffect(() => {
        const textToSend = initialText?.trim();
        if (!textToSend || hasSentInitial.current) return;
        hasSentInitial.current = true;

        // Strip the ?initial= param immediately to prevent resend on refresh.
        router.replace(`/c/${conversationId}`);

        // Send the message through the existing useChat flow.
        void sendMessage({ text: textToSend });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialText, conversationId, router, sendMessage]); // Added dependencies to satisfy linter but logic is guarded by ref

    const title =
        conversations?.find((item) => item.id === conversationId)?.title ?? "Chat";

    return (
        <div className="flex h-full min-h-0 flex-1 flex-col">
            <header className="flex h-14 shrink-0 items-center gap-2 border-b px-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mx-1 h-4" />
                <h1 className="truncate text-sm font-medium">{title}</h1>
            </header>

            {messages.length === 0 ? (
                <ChatEmpty />
            ) : (
                <ChatMessages messages={messages} status={status} />
            )}

            <ChatComposer
                onSend={(text) => {
                    const cleanText = text.trim();
                    if (cleanText) {
                        void sendMessage({ text: cleanText });
                    }
                }}
                isSending={status !== "ready"}
                autoFocus
            />
        </div>
    );
};