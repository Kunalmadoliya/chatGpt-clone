"use server"

import { getAuthenticateUser } from "@/features/auth/actiion/require-user";
import { prisma } from "@/utils/db";



export async function startNewChat() {
  const user = await getAuthenticateUser();

  const conversation = await prisma.conversation.create({
    data: {
      userId: user.id,
      title: "New Chat",
    },
  });


    return conversation.id;
}

