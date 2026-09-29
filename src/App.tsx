import type React from "react";
import "./App.css";

import NoteProvider from "./shared/hooks/noteContext";
import ThemeProvider from "./shared/hooks/useTheme";

function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NoteProvider>{children}</NoteProvider>
    </ThemeProvider>
  );
}

export default App;
