import {prisma} from "@/utils/db";
import {auth} from "@clerk/nextjs/server";

export async function getAuthenticateUser() {
  const {userId} = await auth.protect();
 
  try {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: userId,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error fetching authenticated user:", error);
    throw new Error("Failed to fetch authenticated user");
  }
}
