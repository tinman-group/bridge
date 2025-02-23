"use client";

import { Folder, Forward, MoreHorizontal, Trash2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Sidebar,
  useSidebar,
} from "@workspace/ui";
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
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Sidebar.MenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </Sidebar.MenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Folder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Forward className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
