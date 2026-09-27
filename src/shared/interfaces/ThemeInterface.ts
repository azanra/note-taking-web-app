export interface IThemeInterface {
  theme: "light" | "dark";
  updateTheme: (currentTheme: "light" | "dark") => void;
}
