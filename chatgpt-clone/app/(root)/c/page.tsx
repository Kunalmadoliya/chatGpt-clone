"use client";

import { startNewChat } from "@/features/home/actions/start-new-chat";
import { ChatComposer } from "@/features/conversations/components/chat-composer";
import { ChatEmpty } from "@/features/conversations/components/chat-empty";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

/**
 * Authenticated home screen — shown at /c before any conversation is started.
 * Displays a personalised greeting and composer. No DB row is created until submit.
 */
export default function ChatHomePage() {
  const router = useRouter();
  const [isSending, setIsSending] = useState(false);
  const { user } = useUser();

  // Build greeting from first name, fall back gracefully if unavailable.
  const firstName = user?.firstName ?? user?.fullName?.split(" ")[0] ?? null;
  const greeting = firstName ? `Hello, ${firstName}` : "Hello there";

  /**
   * Creates a conversation with the first message as the title, then navigates
   * to /c/{id}?initial=<encoded> so ConversationView can auto-send it on mount.
   */
  async function handleSend(text: string) {
    setIsSending(true);
    try {
      // Create chat using the new signature which accepts text to generate a title
      const conversationId = await startNewChat();
      // Pass the first message as a URL param — ConversationView reads it on
      // mount, calls sendMessage() once, then strips it via router.replace().
      router.push(`/c/${conversationId}?initial=${encodeURIComponent(text)}`);
    } catch (error) {
      console.error("[/c] Failed to create conversation:", error);
      setIsSending(false);
    }
    // Note: we intentionally do NOT reset isSending to false on success — the
    // router.push() navigates away, so the button stays disabled while loading.
  }

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <header className="flex h-14 shrink-0 items-center gap-2 border-b px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mx-1 h-4" />
        <h1 className="truncate text-sm font-medium">New Chat</h1>
      </header>

      <ChatEmpty greeting={greeting} />

      <ChatComposer
        onSend={handleSend}
        isSending={isSending}
        placeholder="Message Nexus AI…"
        autoFocus
      />
    </div>
  );
}
