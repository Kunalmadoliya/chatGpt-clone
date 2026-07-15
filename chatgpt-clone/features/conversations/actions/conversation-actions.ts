"use server";

import {prisma} from "@/utils/db";
import {NextRequest} from "next/server";
import {getAuthenticateUser} from "@/features/auth/actiion/require-user";
import { revalidatePath } from "next/cache";

export type Conversation = {
  id: string;
  title: string;
  isArchived: boolean;
  isPinned: boolean;
  lastMessageAt: Date | null;
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

// CREATE
export async function createConversation(req: NextRequest) {
  try {
    const user = await getAuthenticateUser();

    let {title} = await req.json();

    if (typeof title !== "string" || !title.trim()) {
      title = "New Chat";
    }

    const conversation = await prisma.conversation.create({
      data: {
        userId: user.id,
        title: title.trim(),
      },
    });


    return {
      success: true,
      message: "Conversation created successfully.",
      data: conversation,
      id : conversation.id,
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

// READ
export async function listConversation(): Promise<
  | {
      success: true;
      data: Conversation[];
    }
  | {
      success: false;
      message: string;
    }
> {
  try {
    const user = await getAuthenticateUser();

    const conversations = await prisma.conversation.findMany({
      where: {
        userId: user.id,
        isArchived: false,
      },
      orderBy: [{isPinned: "desc"}, {lastMessageAt: "desc"}],
      select: {
        id: true,
        title: true,
        isArchived: true,
        isPinned: true,
        lastMessageAt: true,
        createdAt: true,
        updatedAt: true,
      },
    });


    return {
      success: true,
      data: conversations,
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

// UPDATE
export async function updateConversation(
  conversationId: string,
  data : {title?: string , isArchived?: boolean, isPinned?: boolean},
) {
  const user = await getAuthenticateUser();

  await findConversationWithUserId(conversationId, user.id);

  try {
    const updateConversation = await prisma.conversation.update({
      where: {
        id: conversationId,
        userId: user.id,
      },
     data : {
        title: data.title,
        isArchived: data.isArchived,
        isPinned: data.isPinned,
     }
    });
     revalidatePath("/");
  revalidatePath(`/c/${conversationId}`);
    return updateConversation;
  } catch (error) {
    console.error("Update Conversation Error:", error);
    throw new Error("Failed to update conversation.");
  }
}

// DELETE
export async function deleteConversation(conversationId: string) {
  try {
    const user = await getAuthenticateUser();

    await findConversationWithUserId(conversationId, user.id);

    await prisma.conversation.delete({
      where: {
        id: conversationId,
      },
    });

    revalidatePath("/"); 

    return {
      id : conversationId,
    };
  } catch (error) {
    console.error("Delete Conversation Error:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to delete conversation.",
    };
  }
}
