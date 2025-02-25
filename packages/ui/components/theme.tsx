"use client";

import { Moon, Sun } from "lucide-react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ComponentProps, PropsWithChildren } from "react";
import { useThemeMode } from "~ui/hooks/use-theme-mode.ts";
import { Toggle } from "./toggle.tsx";

export type Mode = "light" | "dark" | "system";

/**
 * This should be the root theme component that activates the theme, including
 * setting the dark mode.
 */
export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <NextThemeProvider
    defaultTheme="system"
    attribute="class"
    enableSystem
    disableTransitionOnChange
  >
    {children}
  </NextThemeProvider>
);
ThemeProvider.displayName = "ThemeProvider";

export type ToggleProps = ComponentProps<typeof Toggle> & {
  disabled?: boolean;
};

export const ModeToggle = ({ disabled = false, ...props }: ToggleProps) => {
  const { toggleMode, clearMode } = useThemeMode();
  return (
    <Toggle
      size="sm"
      disabled={disabled}
      onPressedChange={toggleMode}
      {...props}
    >
      <Moon className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hidden dark:block" />
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden" />
    </Toggle>
  );
};

ModeToggle.displayName = "ModeToggle";
