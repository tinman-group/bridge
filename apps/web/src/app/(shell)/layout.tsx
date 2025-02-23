import SidebarProvider from "@/components/nav/provider";
import { AppSidebar } from "@/components/nav/sidebar";
import { Sidebar } from "@workspace/ui";
import { PropsWithChildren } from "react";

export default async ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider className="fixed w-full h-full">
      <AppSidebar />
      <Sidebar.Inset className="relative">{children}</Sidebar.Inset>
    </SidebarProvider>
  );
};
