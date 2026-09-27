import { createContext, use } from "react";
import type { IThemeInterface } from "../interfaces/ThemeInterface";

const ThemeContext = createContext<IThemeInterface | undefined>(undefined);

const useTheme = () => {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider!");
  }

  return context;
};

export { ThemeContext, useTheme };
