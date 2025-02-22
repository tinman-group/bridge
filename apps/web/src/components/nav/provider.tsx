"use client";
import { useSidebarStore } from "@/stores/sidebar";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { ComponentProps } from "react";

export default (props: ComponentProps<typeof SidebarProvider>) => {
  const { isOpen, setIsOpen } = useSidebarStore();
  return <SidebarProvider open={isOpen} onOpenChange={setIsOpen} {...props} />;
};
