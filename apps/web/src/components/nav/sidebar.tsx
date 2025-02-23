"use client";

import type { Route } from "next";
import { type ComponentType } from "react";

import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav/nav-main";
import { NavProjects } from "@/components/nav/nav-projects";
import { NavUser } from "@/components/nav/nav-user";
import { TeamSwitcher } from "@/components/nav/team-switcher";
import { Sidebar } from "@workspace/ui";

export type NavItem = {
  title: string;
  url: Route;
  icon?: ComponentType;
};

export type NavMainItem = NavItem & {
  isActive?: boolean;
  items?: NavItem[];
};

type Data = {
  user: {
    name: string;
    email: string;
  };
  teams: {
    name: string;
    logo: ComponentType;
    plan: string;
  }[];
  navMain: NavMainItem[];
  projects: NavItem[];
};

// This is sample data.
const data: Data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/home",
      icon: SquareTerminal,
      isActive: true,
      // items: [
      //   {
      //     title: "History",
      //     url: "#",
      //   },
      //   {
      //     title: "Starred",
      //     url: "#",
      //   },
      //   {
      //     title: "Settings",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Settings",
      url: "/home",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "/home",
        },
        {
          title: "Security",
          url: "/home",
        },
        {
          title: "Sessions",
          url: "/home",
        },
        {
          title: "Change Password",
          url: "/home",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      title: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

// TODO Add a theme switcher
export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar.Root>) {
  const session = {
    user: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      avatar: "https://avatar.iran.liara.run/public",
    },
  };

  return (
    <Sidebar.Root collapsible="icon" {...props}>
      <Sidebar.Header className="flex-col">
        <TeamSwitcher teams={data.teams} />
      </Sidebar.Header>
      <Sidebar.Content>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </Sidebar.Content>
      <Sidebar.Footer>
        <NavUser
          user={{
            name: session?.user?.firstName || "",
            email: session?.user?.email || "",
            avatar:
              session?.user?.avatar || "https://avatar.iran.liara.run/public",
          }}
        />
      </Sidebar.Footer>
      <Sidebar.Rail />
    </Sidebar.Root>
  );
}
