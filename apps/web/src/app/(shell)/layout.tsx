import SidebarProvider from "@/components/nav/provider";
import { AppSidebar } from "@/components/nav/sidebar";
import { SidebarInset } from "@workspace/ui";
import { PropsWithChildren } from "react";

const Layout = async ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider className="fixed w-full h-full">
      <AppSidebar />
      <SidebarInset className="relative">{children}</SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
