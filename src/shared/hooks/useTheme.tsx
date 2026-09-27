import type React from "react";
import { useState } from "react";
import type { IThemeInterface } from "../interfaces/ThemeInterface";
import { ThemeContext } from "./themeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<IThemeInterface["theme"]>(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const currentTheme = storedTheme ?? systemTheme;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(currentTheme);

    return currentTheme;
  });

  const updateTheme = (currentTheme: IThemeInterface["theme"]) => {
    localStorage.setItem("theme", currentTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(currentTheme);
    setTheme(currentTheme);
  };

  return <ThemeContext value={{ theme, updateTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
