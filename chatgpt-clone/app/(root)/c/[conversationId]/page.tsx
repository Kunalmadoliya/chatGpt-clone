import {getConversation} from "@/features/conversations/actions/conversation-actions";

import {notFound} from "next/dist/client/components/not-found";
import {loadChatMessages} from "@/features/ai/actions/chat-store";
import { ConversationView } from '@/features/conversations/components/conversation-view';

type ConversationPageProps = {
  params: Promise<{conversationId: string}>;
};

export default async function Page({params}: ConversationPageProps) {
  const {conversationId} = await params;
  try {
    await getConversation(conversationId);
  } catch (error) {
    notFound();
  }
  const initialMessages = await loadChatMessages(conversationId);
 return (
    <ConversationView
      key={conversationId}
      conversationId={conversationId}
      initialMessages={initialMessages}
    />
  )
}
