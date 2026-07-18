import {getConversation} from "@/features/conversations/actions/conversation-actions";
import {UserButton} from "@clerk/nextjs";
import {notFound} from "next/dist/client/components/not-found";

type ConversationPageProps = {
  params: Promise<{conversationId: string}>;
};

export default async function Page({params}: ConversationPageProps) {
  const {conversationId} = await params;
  try {
    const conversation = await getConversation(conversationId);
  } catch (error) {
    notFound();
  }

  return <></>;
}
