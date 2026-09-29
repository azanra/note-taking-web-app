import { useNavigate } from "react-router";
import IconArrowLeft from "../../../assets/images/icon-arrow-left.svg?react";
import type { INoteInterface } from "../../../shared/interfaces/NoteInterface";
import IconTag from "../../../assets/images/icon-tag.svg?react";
import IconClock from "../../../assets/images/icon-clock.svg?react";
import useWindowSize from "../../../shared/hooks/useWindowSize";

const Note = ({ note }: { note?: INoteInterface }) => {
  const { isDesktop } = useWindowSize();

  return (
    <section className="px-[16px] py-[20px] flex flex-col gap-[12px] md:px-[32px] md:gap-[16px] xxl:px-[24px]">
      {!isDesktop && <NoteHeader />}

      <main className="flex flex-col gap-[12px] md:gap-[16px]">
        <input
          className="text-preset-2 text-(--color-neutral-950) placeholder:text-(--color-neutral-950) font-bold"
          placeholder="Enter a title..."
        />

        <section className="flex flex-col gap-[4px] md:gap-[8px]">
          <NoteInfo
            title="Tags"
            icon={<IconTag className="w-[16px] h-[16px]" />}
            children={
              <textarea
                className="text-preset-6 placeholder:text-(--color-neutral-400) w-[220px] md:w-[581px] xxl:w-[417px]"
                placeholder="Add tags separated by commas (e.g. Work, Planning)"
              />
            }
          />
          <NoteInfo
            title="Last Edited"
            icon={<IconClock className="w-[16px] h-[16px]" />}
            children={
              <p className="text-preset-6 text-(--color-neutral-400) w-[220px] md:w-[581px] xxl:w-[417px]">
                Not yet saved
              </p>
            }
          />
        </section>

        <hr className="border-(--color-neutral-200)" />

        <textarea
          className="text-preset-6 text-(--color-neutral-700) placeholder:text-(--color-neutral-700) h-[511px] md:h-[648px] xxl:h-[567px]"
          placeholder="Start typing your note here..."
        />
      </main>

      {isDesktop && (
        <footer className="flex flex-col gap-[16px]">
          <hr className="border-(--color-neutral-200)" />
          <div className="flex gap-[16px] text-preset-4">
            <button className="bg-(--color-blue-500) px-[16px] py-[12px] rounded-(--radius-8) text-(--color-neutral-0) w-[99px] h-[41px]">
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

const NoteHeader = () => {
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
        <button className="text-(--color-blue-500)">Save Note</button>
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
