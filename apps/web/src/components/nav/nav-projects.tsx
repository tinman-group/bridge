"use client";

import { Folder, Forward, MoreHorizontal, Trash2 } from "lucide-react";

import { DropdownMenu, Sidebar, useSidebar } from "@workspace/ui";
import type { NavItem } from "./sidebar";

type Props = {
  projects: NavItem[];
};

export function NavProjects({ projects }: Props) {
  const { isMobile } = useSidebar();

  return (
    <Sidebar.Group className="group-data-[collapsible=icon]:hidden">
      <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {projects.map((item) => (
          <Sidebar.MenuItem key={item.title}>
            <Sidebar.MenuButton asChild>
              <a href={item.url}>
                {item?.icon && <item.icon />}
                <span>{item.title}</span>
              </a>
            </Sidebar.MenuButton>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Sidebar.MenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </Sidebar.MenuAction>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenu.Item>
                  <Folder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <Forward className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Sidebar.MenuItem>
        ))}
        <Sidebar.MenuItem>
          <Sidebar.MenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Group>
  );
}
