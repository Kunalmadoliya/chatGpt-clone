import {onBoardUser} from "@/features/auth/actiion/onboard";
import {auth} from "@clerk/nextjs/server";
import React from "react";
import {ChatShell} from "@/features/conversations/components/chat-shell";

const RootGrouplayout = async ({children}: {children: React.ReactNode}) => {
  await auth.protect();
  await onBoardUser();

  return (
    <div>
      <ChatShell>{children}</ChatShell>
    </div>
  );
};

export default RootGrouplayout;
