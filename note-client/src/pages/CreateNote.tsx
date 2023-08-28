import {useRef} from "react";
import {Button} from "../components/Button";
import {AddDialog} from "../components/AddDialog";

export function CreateNote() {
  const openDialogRef = useRef<HTMLDialogElement | null>(null);

  const handleDialogOpen = () => {
    if (openDialogRef.current) {
      openDialogRef.current.showModal();
    }
  };

  return (
    <div className="p-4">
      <Button
        borderColor="border-green-500"
        backgroundColorHover="hover:bg-green-700"
        textColor="text-green-700"
        onClick={handleDialogOpen}
        ariaLabel="new"
      >
        New
      </Button>
      <AddDialog title="Add Note" dialogRef={openDialogRef} />
    </div>
  );
}
