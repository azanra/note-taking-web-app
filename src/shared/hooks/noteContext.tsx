import type { INoteInterface } from "../interfaces/NoteInterface";
import INITIAL_DATA from "../constants/initialData";
import { useState } from "react";

import { NoteContext } from "../hooks/useNote";

const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<INoteInterface[]>(INITIAL_DATA);

  return <NoteContext value={{ notes, setNotes }}>{children}</NoteContext>;
};

export default NoteProvider;
