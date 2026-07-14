import {onBoardUser} from "@/features/auth/actiion/onboard";
import {auth} from "@clerk/nextjs/server";
import React from "react";

const RootGrouplayout = async ({children}: {children: React.ReactNode}) => {
  await auth.protect();
  await onBoardUser();

  return <div>{children}</div>;
};

export default RootGrouplayout;
