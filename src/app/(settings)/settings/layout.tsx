import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebarx";
import { SettingsBreadcrumbs } from "./settings-breadcrumbs";
import { SettingsSidebar } from "./settings-sidebar";

export default async function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getSessionFromCookie();

  // if (!session) {
  //   redirect("/sign-in");
  // }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="w-full flex flex-col">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <SettingsBreadcrumbs />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="lg:w-1/5">
              <SettingsSidebar />
            </aside>
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
