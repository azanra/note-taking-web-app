import type { INoteInterface } from "../interfaces/NoteInterface";
import INITIAL_DATA, { EMPTY_DATA } from "../constants/initialData";
import { useState } from "react";

import { NoteContext } from "../hooks/useNote";

const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<INoteInterface[]>(INITIAL_DATA);
  const [currentNote, setCurrentNote] = useState<INoteInterface>(EMPTY_DATA);

  const isEdit = JSON.stringify(currentNote) !== JSON.stringify(EMPTY_DATA);

  const handleAddNote = (activeNote: INoteInterface) => {
    if (!isEdit) {
      setNotes([
        ...notes,
        {
          ...activeNote,
          lastEdited: new Date().toString(),
          id: notes[notes.length - 1].id + 1,
        },
      ]);
      return;
    }

    setNotes(
      notes.map((note) =>
        note.id === activeNote.id
          ? {
              ...activeNote,
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

  const handleCancel = () => {
    setCurrentNote(isEdit ? currentNote : EMPTY_DATA);
  };

  return (
    <NoteContext
      value={{
        notes,
        setNotes,
        handleAddNote,
        handleArchiveNote,
        handleDeleteNote,
        currentNote,
        setCurrentNote,
        handleCancel,
        isEdit,
      }}
    >
      {children}
    </NoteContext>
  );
};

export default NoteProvider;
