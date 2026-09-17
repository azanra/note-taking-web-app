import type { Dispatch, SetStateAction } from "react";

export interface INoteInterface {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
}

export interface INoteContext {
  notes: INoteInterface[];
  setNotes: Dispatch<SetStateAction<INoteInterface[]>>;
}
