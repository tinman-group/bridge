"use client";

import { Flex, Theme as RadixTheme } from "@radix-ui/themes";
import { Moon, Sun } from "lucide-react";
import { ThemeProvider } from "next-themes";
import { ComponentProps, PropsWithChildren } from "react";
import { useThemeMode } from "~ui/hooks/use-theme-mode.ts";
import { IconButton } from "./icon-button.tsx";

export type Mode = "light" | "dark" | "system";

export function Theme(props: ComponentProps<typeof RadixTheme>) {
  return <RadixTheme {...props} />;
}

/**
 * This should be the root theme component that activates the theme, including
 * setting the dark mode.
 */
export const ThemeRoot = ({ children }: PropsWithChildren) => (
  <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
    <RadixTheme
      appearance="inherit"
      accentColor="brown"
      grayColor="sand"
      panelBackground="solid"
      radius="medium"
      scaling="105%"
    >
      {children}
    </RadixTheme>
  </ThemeProvider>
);
ThemeRoot.displayName = "Theme.Root";

export type ToggleProps = ComponentProps<typeof IconButton> & {
  disabled?: boolean;
};

export const ModeToggle = ({
  disabled = false,
  children,
  ...props
}: ToggleProps) => {
  const { mode, resolvedMode, toggleMode, clearMode } = useThemeMode();
  const isSystem = mode === "system";
  return (
    <Flex align="center" justify="center" height="100%" width="48">
      <IconButton
        disabled={disabled}
        size="2"
        variant={"ghost"}
        onClick={(ev) => {
          if (disabled) return;
          if (ev.shiftKey) clearMode();
          else toggleMode();
        }}
        {...props}
      >
        <Moon
          width={24}
          height={24}
          className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hidden dark:block"
        />
        <Sun
          width={24}
          height={24}
          className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden"
        />
      </IconButton>
    </Flex>
  );
};

ModeToggle.displayName = "ModeToggle";
