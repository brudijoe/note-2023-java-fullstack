type DialogProps = {
  width: string;
  dialogRef: React.RefObject<HTMLDialogElement>;
  children?: React.ReactNode;
};

export function Dialog({width, dialogRef, children}: DialogProps) {
  return (
    <dialog
      className={`${width} p-4 backdrop:bg-gray-800 backdrop:bg-opacity-80 dark:backdrop:bg-gray-900 dark:backdrop:bg-opacity-80 bg-gray-200 dark:bg-gray-800 border-2 border-black dark:border-white rounded`}
      ref={dialogRef}
    >
      {children}
    </dialog>
  );
}
