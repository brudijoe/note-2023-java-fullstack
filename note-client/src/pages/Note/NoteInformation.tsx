type NoteInformationProps = {
  noteId: number;
};

export function NoteInformation({noteId}: NoteInformationProps) {
  return (
    <div className="flex flex-col">
      <div className=" text-black dark:text-white">{noteId}</div>
      <div className="text-black dark:text-white">Created: 9/2/2023</div>
    </div>
  );
}
