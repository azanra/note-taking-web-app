import { createContext, use } from "react";
import type { INoteContext } from "../interfaces/NoteInterface";

const NoteContext = createContext<INoteContext | undefined>(undefined);

const useNotes = () => {
  const context = use(NoteContext);

  if (!context) {
    throw new Error("useNotes must be used within a NoteProvider!");
  }

  return context;
};

export { NoteContext, useNotes };
