import { useLocation, useNavigate } from "react-router";
import IconArrowLeft from "../../../assets/images/icon-arrow-left.svg?react";
import type { INoteInterface } from "../../../shared/interfaces/NoteInterface";
import IconTag from "../../../assets/images/icon-tag.svg?react";
import IconClock from "../../../assets/images/icon-clock.svg?react";
import useWindowSize from "../../../shared/hooks/useWindowSize";
import { useState } from "react";
import { EMPTY_DATA } from "../../../shared/constants/initialData";
import { useNotes } from "../../../shared/hooks/useNote";

const Note = () => {
  const location = useLocation();
  const state = location.state as INoteInterface | undefined;

  const [currentNote, setCurrentNote] = useState(state ?? EMPTY_DATA);
  const { notes, setNotes } = useNotes();
  const { isDesktop } = useWindowSize();
  const navigate = useNavigate();

  const { title, tags, content, lastEdited } = currentNote;

  const handleAddNote = () => {
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
      notes.map((note) => {
        if (note.id === currentNote.id) {
          return {
            ...currentNote,
            lastEdited: new Date().toString(),
          };
        }

        return note;
      }),
    );
  };

  return (
    <section className="px-[16px] py-[20px] flex flex-col gap-[12px] md:px-[32px] md:gap-[16px] xxl:px-[24px]">
      {!isDesktop && (
        <NoteHeader
          handleAddNote={() => {
            handleAddNote();
            void navigate("/");
          }}
        />
      )}

      <main className="flex flex-col gap-[12px] md:gap-[16px]">
        <input
          className="text-preset-2 text-(--color-neutral-950) placeholder:text-(--color-neutral-950) font-bold"
          placeholder="Enter a title..."
          value={title}
          onChange={(e) => {
            setCurrentNote({ ...currentNote, title: e.target.value });
          }}
        />

        <section className="flex flex-col gap-[4px] md:gap-[8px]">
          <NoteInfo
            title="Tags"
            icon={<IconTag className="w-[16px] h-[16px]" />}
            children={
              <textarea
                className="text-preset-6 placeholder:text-(--color-neutral-400) w-[220px] md:w-[581px] xxl:w-[417px]"
                placeholder="Add tags separated by commas (e.g. Work, Planning)"
                value={tags.join(", ")}
                onChange={(e) => {
                  setCurrentNote({
                    ...currentNote,
                    tags: e.target.value.split(", "),
                  });
                }}
              />
            }
          />
          <NoteInfo
            title="Last Edited"
            icon={<IconClock className="w-[16px] h-[16px]" />}
            children={
              <p
                className={`text-preset-6 ${lastEdited ? "text-(--color-neutral-700)" : " text-(--color-neutral-400)"} w-[220px] md:w-[581px] xxl:w-[417px] py-[4px]`}
              >
                {lastEdited || "Not yet saved"}
              </p>
            }
          />
        </section>

        <hr className="border-(--color-neutral-200)" />

        <textarea
          className="text-preset-6 text-(--color-neutral-700) placeholder:text-(--color-neutral-700) h-[511px] md:h-[648px] xxl:h-[567px]"
          placeholder="Start typing your note here..."
          value={content}
          onChange={(e) => {
            setCurrentNote({
              ...currentNote,
              content: e.target.value,
            });
          }}
        />
      </main>

      {isDesktop && (
        <footer className="flex flex-col gap-[16px]">
          <hr className="border-(--color-neutral-200)" />
          <div className="flex gap-[16px] text-preset-4">
            <button
              onClick={() => {
                handleAddNote();
              }}
              className="bg-(--color-blue-500) px-[16px] py-[12px] rounded-(--radius-8) text-(--color-neutral-0) w-[99px] h-[41px]"
            >
              Save Note
            </button>
            <button className="bg-(--color-neutral-100) px-[16px] py-[12px] rounded-(--radius-8) text-(--color-neutral-600) w-[78px] h-[41px]">
              Cancel
            </button>
          </div>
        </footer>
      )}
    </section>
  );
};

const NoteHeader = ({ handleAddNote }: { handleAddNote: () => void }) => {
  const navigate = useNavigate();

  return (
    <header className="pb-[12px] flex items-center justify-between border-b border-(--color-neutral-200)">
      <button
        onClick={() => void navigate("/")}
        className="flex items-center gap-[4px]"
      >
        <IconArrowLeft className="h-[18px] w-[18px] *:fill-(--color-neutral-600)" />
        <span className="text-preset-4 text-(--color-neutral-600)">
          Go Back
        </span>
      </button>

      <div className="flex gap-[16px] text-preset-4">
        <button className="text-(--color-neutral-600)">Cancel</button>
        <button
          onClick={() => {
            handleAddNote();
          }}
          className="text-(--color-blue-500)"
        >
          Save Note
        </button>
      </div>
    </header>
  );
};

const NoteInfo = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[6px]">
        {icon}
        <span className="text-preset-6 text-(--color-neutral-700)">
          {title}
        </span>
      </div>

      {children}
    </div>
  );
};

export default Note;
