import type { INoteInterface } from "../interfaces/NoteInterface";
import INITIAL_DATA from "../constants/initialData";
import { useState } from "react";

import { NoteContext } from "../hooks/useNote";

const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<INoteInterface[]>(INITIAL_DATA);

  const handleAddNote = (
    state: INoteInterface | undefined,
    currentNote: INoteInterface,
  ) => {
    if (!state) {
      setNotes([
        ...notes,
        {
          ...currentNote,
          lastEdited: new Date().toString(),
          id: notes[notes.length - 1].id + 1,
        },
      ]);
      return;
    }

    setNotes(
      notes.map((note) =>
        note.id === currentNote.id
          ? {
              ...currentNote,
              lastEdited: new Date().toString(),
            }
          : note,
      ),
    );
  };

  const handleArchiveNote = (noteId: number, isArchived: boolean) => {
    setNotes(
      notes.map((note) =>
        note.id === noteId ? { ...note, isArchived } : note,
      ),
    );
  };

  const handleDeleteNote = (noteId: number) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <NoteContext
      value={{
        notes,
        setNotes,
        handleAddNote,
        handleArchiveNote,
        handleDeleteNote,
      }}
    >
      {children}
    </NoteContext>
  );
};

export default NoteProvider;
