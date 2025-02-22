"use client";
import {
  MessageComposer,
  ThreadHistory,
  ThreadProvider,
} from "@/components/assistant-ui/thread";
import { ThreadListNew } from "@/components/assistant-ui/thread-list";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Container } from "@workspace/ui/components/container";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";
import { ModeToggle } from "~ui/components/theme";

export default function Page() {
  const runtime = useChatRuntime({
    api: "/api/chat",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <ThreadProvider>
        <Container>
          <Container.Header>
            <SidebarTrigger />
            <Container.Spacer />
            <ThreadListNew />
            <div className="w-4" />
            <ModeToggle />
          </Container.Header>
          <Container.Content asChild>
            <ThreadHistory />
          </Container.Content>
          <Container.Footer className="bg-secondary">
            <MessageComposer />
          </Container.Footer>
        </Container>
      </ThreadProvider>
    </AssistantRuntimeProvider>
  );
}
