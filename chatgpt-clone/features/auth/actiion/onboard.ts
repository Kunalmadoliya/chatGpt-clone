import {currentUser} from "@clerk/nextjs/server";
import {prisma} from "@/utils/db";

export async function onBoardUser() {
  const clerkUser = await currentUser();
  if (!clerkUser) throw new Error("User not found");

  const name =
    clerkUser!.fullName ??
    ([clerkUser!.firstName, clerkUser!.lastName].filter(Boolean).join(" ") ||
      null);

  try {
    const user = await prisma.user.upsert({
      where: {clerkId: clerkUser.id},
      create: {
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress ?? null,
        fullName: name,
        imageUrl: clerkUser.imageUrl,
      },
      update: {
        email: clerkUser.emailAddresses[0]?.emailAddress ?? null,
        fullName: name,
        imageUrl: clerkUser.imageUrl,
      },
    });

    return user;
  } catch (error) {
    console.error("Error onboarding user:", error);
    throw new Error("Failed to onboard user");
  }
}
