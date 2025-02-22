import { useTheme } from "next-themes";
import type { Mode } from "../components/theme.tsx";

export type ModeHook = {
  mode: Mode;
  resolvedMode: Exclude<Mode, "system">;
  setMode(mode: Mode): void;
  toggleMode(): void;
  clearMode(): void;
};

export const useThemeMode = (): ModeHook => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mode = !theme
    ? "system"
    : theme === "dark" || theme === "system"
      ? theme
      : "light";
  const resolvedMode = resolvedTheme ?? ("light" as any);
  const setMode = setTheme;
  const toggleMode = () => setMode(resolvedMode === "light" ? "dark" : "light");
  const clearMode = () => setMode("system");
  return { mode, resolvedMode, setMode, toggleMode, clearMode };
};
