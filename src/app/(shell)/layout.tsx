import SidebarProvider from "@/components/nav/provider";
import { AppSidebar } from "@/components/nav/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";
export default async ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider className="fixed w-full h-full">
      <AppSidebar />
      <SidebarInset className="relative">{children}</SidebarInset>
    </SidebarProvider>
  );
};
