"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Sidebar,
} from "@workspace/ui";
import type { Route } from "next";
import Link from "next/link";
import type { NavMainItem } from "./sidebar";

type Props = {
  items: NavMainItem[];
};

export function NavMain({ items }: Props) {
  return (
    <Sidebar.Group>
      <Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {items.map((item) => {
          // If there are no child items, render a direct link
          if (!item.items?.length) {
            return (
              <Sidebar.MenuItem key={item.title}>
                <Sidebar.MenuButton asChild tooltip={item.title}>
                  <Link href={item.url as Route}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            );
          }

          // Otherwise render the collapsible menu
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <Sidebar.MenuItem>
                <CollapsibleTrigger asChild>
                  <Sidebar.MenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </Sidebar.MenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Sidebar.MenuSub>
                    {item.items?.map((subItem) => (
                      <Sidebar.MenuSubItem key={subItem.title}>
                        <Sidebar.MenuSubButton asChild>
                          {subItem.url.startsWith("/") ? (
                            <Link href={subItem.url as Route}>
                              <span>{subItem.title}</span>
                            </Link>
                          ) : (
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          )}
                        </Sidebar.MenuSubButton>
                      </Sidebar.MenuSubItem>
                    ))}
                  </Sidebar.MenuSub>
                </CollapsibleContent>
              </Sidebar.MenuItem>
            </Collapsible>
          );
        })}
      </Sidebar.Menu>
    </Sidebar.Group>
  );
}
