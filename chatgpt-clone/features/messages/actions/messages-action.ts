"use server";

import {prisma} from "@/utils/db";
import {getAuthenticateUser} from "@/features/auth/actiion/require-user";
import type {MessageRole} from "@/lib/generated/prisma/client";
import { revalidatePath } from "next/cache";

export type MessageStatus = "PENDING" | "COMPLETED" | "FAILED";

export type Message = {
  id: string;
  conversationId: string;
  content: string;
  status: MessageStatus;
  role: MessageRole;
  createdAt: Date;
  updatedAt: Date;
};

async function findConversationWithUserId(
  conversationId: string,
  userId: string,
) {
  const conversation = await prisma.conversation.findFirst({
    where: {
      id: conversationId,
      userId,
    },
  });

  if (!conversation) {
    throw new Error("Conversation not found.");
  }

  return conversation;
}

export async function listMessages(conversationId: string): Promise<
  | {
      success: true;
      data: Message[];
    }
  | {
      success: false;
      message: string;
    }
> {
  const user = await getAuthenticateUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  try {
    await findConversationWithUserId(conversationId, user.id);

    const messages = await prisma.message.findMany({
      where: {conversationId},
      orderBy: {createdAt: "asc"},
      select: {
        id: true,
        conversationId: true,
        content: true,
        status: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    

    return {
      success: true,
      data: messages,
    };


  } catch (error) {
    console.error("List Conversation Error:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch conversations.",
    };
  }
}

export async function createMessage(conversationId: string, content: string) {
  //get a user by the id if the use found then create a message with the user id and the conversation id
  //get the content role and status from the request body and create a message with the user id and the conversation id

  const user = await getAuthenticateUser();

  if (!user) {
    throw new Error("User not authenticated");
  }
  try {
    if (typeof content !== "string" || !content.trim()) {
      throw new Error("Invalid message content.");
    }

    const createMessage = await prisma.message.create({
      data: {
        conversationId,
        content,
        role: "USER",
        status: "COMPLETED",
      },
    });

    return {
      success: true,
      message: "Conversation created successfully.",
      data: createMessage,
    };
  } catch (error) {
    console.error("Create Conversation Error:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to create conversation.",
    };
  }
}

export async function updateMessage(messageId: string, content: string) {
  const user = await getAuthenticateUser();
   const trimmed = content.trim();

  if (!user) {
    throw new Error("User not authenticated");
  }

  if(!trimmed) {
    throw new Error("Message content cannot be empty.");
  }

  try {
    const message = await prisma.message.findUnique({
      where: {id: messageId},
      include: { conversation: true},
    });

    if (!message || message.conversation.userId !== user.id) {
      throw new Error("Message not found.");
    }

    const updatedMessage = await prisma.message.update({
      where: {id: messageId},
      data: {content : trimmed},
    });

    revalidatePath(`/c/${message.conversationId}`);
    return {
      success: true,
      message: "Message updated successfully.",
      messageData : updatedMessage
    };
  } catch (error) {
    console.error("Update Message Error:", error);
    throw new Error("Failed to update message.");
  }
}

export async function deleteMessage(messageId: string) {
  const user = await getAuthenticateUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  try {
    const message = await prisma.message.findUnique({
      where: {id: messageId},
      include: { conversation: true},
    });

    if (!message || message.conversation.userId !== user.id) {
      throw new Error("Message not found.");
    }

    await prisma.message.delete({
      where: {id: messageId},
    });

      revalidatePath(`/c/${message.conversationId}`);
      return {
        success: true,
        message: "Message deleted successfully.",
        conversationId : message.conversationId  , 
        id : messageId
      };
  } catch (error) {
    console.error("Delete Message Error:", error);
    throw new Error("Failed to delete message.");
  }
}
