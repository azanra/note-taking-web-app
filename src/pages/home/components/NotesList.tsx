import useWindowSize from "../../../shared/hooks/useWindowSize";
import IconPlus from "../../../assets/images/icon-plus.svg?react";
import { useNotes } from "../../../shared/hooks/useNote";

import { Fragment } from "react/jsx-runtime";
import NoteChip from "./NoteChip";
import { useNavigate } from "react-router";

const NotesList = () => {
  const { isDesktop } = useWindowSize();
  const { notes } = useNotes();

  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col gap-[16px] px-[16px] py-[20px] md:px-[32px] md:pt-[24px] md:pb-[188px] xxl:pt-[20px] xxl:pb-[37px] xxl:pl-[32px] xxl:pr-[16px]">
      {!isDesktop ? (
        <h1 className="text-preset-1 font-bold">All Notes</h1>
      ) : (
        <button className="bg-(--color-blue-500) rounded-(--radius-8) w-[242px] h-[41px]">
          <span className="text-(--color-neutral-0) text-preset-4 font-medium">
            + Create New Note
          </span>
        </button>
      )}

      <div className="flex flex-col gap-[4px]">
        {notes.map((note, index) => (
          <Fragment key={note.id}>
            <NoteChip note={note} />
            {index !== notes.length - 1 && (
              <hr className="border-(--color-neutral-200)" />
            )}
          </Fragment>
        ))}
      </div>

      {!isDesktop && (
        <button
          onClick={() => void navigate("new-note")}
          className="fixed bottom-[72px] md:bottom-[106px] right-[16px] md:right-[35px] bg-(--color-blue-500) rounded-[50%] w-[48px] h-[48px] md:w-[64px] md:h-[64px] flex justify-center items-center"
        >
          <IconPlus className="*:fill-(--color-neutral-50)" />
        </button>
      )}
    </section>
  );
};

export default NotesList;
