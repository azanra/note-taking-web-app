import type { INoteInterface } from "../../../shared/interfaces/NoteInterface";

const NoteChip = ({ note }: { note: INoteInterface }) => {
  const { title, tags, lastEdited } = note;

  return (
    <section className="flex flex-col gap-[12px] p-[8px]">
      <h2 className="text-preset-3 font-semibold text-(--color-neutral-950)">
        {title}
      </h2>
      <div className="flex items-center gap-[4px]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-[6px] py-[2px] text-preset-6 bg-(--color-neutral-200) text-(--color-neutral-950) rounded-(--radius-4)"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-preset-6 text-(--color-neutral-700)">{lastEdited}</p>
    </section>
  );
};

export default NoteChip;
