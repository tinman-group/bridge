"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useSidebarStore } from "@/stores/sidebar";
import { ComponentProps } from "react";

export default (props: ComponentProps<typeof SidebarProvider>) => {
  const { isOpen, setIsOpen } = useSidebarStore();
  return <SidebarProvider open={isOpen} onOpenChange={setIsOpen} {...props} />;
};
