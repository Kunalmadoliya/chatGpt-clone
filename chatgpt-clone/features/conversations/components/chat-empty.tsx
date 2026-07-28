import { MessageSquareIcon } from "lucide-react";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

type ChatEmptyProps = {
  /**
   * Main greeting text displayed above the description.
   * Defaults to the generic "How can I help you today?" when not provided.
   */
  greeting?: string;
};

/** Empty-state placeholder shown before the first message is sent. */
export function ChatEmpty({ greeting = "How can I help you today?" }: ChatEmptyProps) {
  return (
    <div className="flex flex-1 items-center justify-center px-4">
      <Empty className="border-0">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <MessageSquareIcon />
          </EmptyMedia>
          <EmptyTitle className="text-2xl tracking-tight">
            {greeting}
          </EmptyTitle>
          <EmptyDescription>
            Ask anything — replies stream in real time.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
}