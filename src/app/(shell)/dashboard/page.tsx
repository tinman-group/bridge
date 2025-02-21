"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeModeToggle = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const val = theme === "system" ? systemTheme : (theme ?? "light");
  const next = val === "dark" ? "light" : "dark";
  const toggleTheme = () => setTheme(next);
  const restoreSystemTheme = () => setTheme("system");
  return (
    <Toggle
      onPressedChange={toggleTheme}
      onDoubleClick={restoreSystemTheme}
      pressed={theme !== "system"}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
};

export default function Page() {
  return (
    <Container>
      <Container.Header>
        <SidebarTrigger />
        <Breadcrumb className="ml-3">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>My Project</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Asset</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Chat</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Container.Spacer />
        <ThemeModeToggle />
      </Container.Header>
      <Container.Content>CONTENT</Container.Content>
      <Container.Footer>
        LEFT
        <Container.Spacer />
        RIGHT
      </Container.Footer>
    </Container>
  );
}
