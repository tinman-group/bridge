"use client";
import { useSidebarStore } from "@/stores/sidebar";
import { Sidebar } from "@workspace/ui";
import { ComponentProps } from "react";

export default (props: ComponentProps<typeof Sidebar.Provider>) => {
  const { isOpen, setIsOpen } = useSidebarStore();
  return <Sidebar.Provider open={isOpen} onOpenChange={setIsOpen} {...props} />;
};
