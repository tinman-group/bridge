"use client";
import { useSidebarStore } from "@/stores/sidebar";
import { SidebarProvider } from "@workspace/ui";
import { ComponentProps } from "react";

const Provider = (props: ComponentProps<typeof SidebarProvider>) => {
  const { isOpen, setIsOpen } = useSidebarStore();
  return <SidebarProvider open={isOpen} onOpenChange={setIsOpen} {...props} />;
};

export default Provider;
