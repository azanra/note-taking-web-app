import type { Dispatch, SetStateAction } from "react";

export interface INoteInterface {
  id: number;
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
}

export interface INoteContext {
  notes: INoteInterface[];
  setNotes: Dispatch<SetStateAction<INoteInterface[]>>;
  handleAddNote: (activeNote: INoteInterface) => void;
  handleArchiveNote: (noteId: number, isArchived: boolean) => void;
  handleDeleteNote: (noteId: number) => void;
  currentNote: INoteInterface;
  setCurrentNote: Dispatch<SetStateAction<INoteInterface>>;
  handleCancel: () => void;
  isEdit: boolean;
}
