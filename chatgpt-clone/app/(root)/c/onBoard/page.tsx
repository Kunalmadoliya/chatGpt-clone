import { onBoardUser } from "@/features/auth/actiion/onboard";
import { redirect } from "next/navigation";

/**
 * Onboarding server component — runs exactly once per sign-in/sign-up flow.
 * Upserts the Clerk user into our DB via onBoardUser(), then redirects to /c.
 * Because this is a server component, the redirect fires before any client
 * render, so no loading spinner is needed.
 */
export default async function OnBoardPage() {
  await onBoardUser();
  redirect("/c");
}
