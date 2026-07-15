import {
  listConversation,
  createConversation,
  updateConversation,
  deleteConversation,
} from "@/features/conversations/actions/conversation-actions";
import {queryKeys} from "../utils/query-keys";
import {useRouter} from "next/navigation";

import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {toast} from "sonner";
export function useConversation() {
  return useQuery({
    queryKey: queryKeys.conversations.all,
    queryFn: listConversation,
  });
}

export function useCreateConversation() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: createConversation,
    onSuccess: (conversation) => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.conversations.all,
      });
      router.push(`/c/${conversation.id}`);
    },
    onError: (error) => {
      console.error("Error creating conversation:", error);
      toast.error("Failed to create conversation.");
    },
  });
}

export function useUpdateConversation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      ...data
    }: {
      id: string;
      title?: string;
      isArchived?: boolean;
      isPinned?: boolean;
    }) => updateConversation(id, data),
    onSuccess: (conversation) => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.conversations.all,
      });
      void queryClient.invalidateQueries({
        queryKey: queryKeys.conversations.detail(conversation.id),
      });
    },
    onError: (error) => {
      console.error("Error updating conversation:", error);
      toast.error("Failed to update conversation.");
    },
  });
}

export function useDeleteConversation(activeId?: string) {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (id: string) => deleteConversation(id),
    onSuccess: ({id}) => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.conversations.all,
      });
      queryClient.removeQueries({
        queryKey: queryKeys.messages.byConversation(id as string),
      });

      if (activeId === id) {
        router.push("/");
      }

      toast.success("Chat deleted");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Could not delete chat");
    },
  });
}
