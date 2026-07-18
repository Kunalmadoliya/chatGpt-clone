"use server"

import { getAuthenticateUser } from "@/features/auth/actiion/require-user";
import { prisma } from "@/utils/db";



export async function startNewChat() {
  const user = await getAuthenticateUser();

  console.log("Authenticated user:", user);

  const conversation = await prisma.conversation.create({
    data: {
      userId: user.id,
      title: "New Chat",
    },
  });



  return {
    conversationId: conversation.id,
  };
}

