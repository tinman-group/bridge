"use client";

import { ChevronsUpDown, Plus } from "lucide-react";

import { DropdownMenu } from "@radix-ui/themes";
import { Sidebar, useSidebar } from "@workspace/ui";
import { ElementType, useState } from "react";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: ElementType;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = useState(teams[0]!);

  return (
    <Sidebar.Menu className="flex-auto">
      <Sidebar.MenuItem className="flex flex-col flex-auto">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Sidebar.MenuButton>
              <div className="flex aspect-square size-8 items-center  justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeTeam.name}
                </span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="relative ml-auto top-px" />
            </Sidebar.MenuButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56"
            align="start"
            side={isMobile ? "bottom" : "bottom"}
            sideOffset={4}
          >
            <DropdownMenu.Label className="text-xs text-muted-foreground">
              Teams
            </DropdownMenu.Label>
            {teams.map((team, index) => (
              <DropdownMenu.Item
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  <team.logo className="size-4 shrink-0" />
                </div>
                {team.name}
              </DropdownMenu.Item>
            ))}
            <DropdownMenu.Separator />
            <DropdownMenu.Item className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add team</div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  );
}
