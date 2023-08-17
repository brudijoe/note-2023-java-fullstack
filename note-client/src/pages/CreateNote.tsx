import * as React from "react";
import {Button} from "../components/Button";
import {AddDialog} from "../components/AddDialog";
import {useRef} from "react";

export function CreateNote() {
  const dialogRef = useRef(null)

  const handleDialogOpen = () => {
    dialogRef.current.showModal();
  };

  return (
    <div className="p-4">
      <Button
        borderColor="border-green-500"
        backgroundColor="bg-green-500"
        backgroundColorHover="hover:bg-green-700"
        textColor="text-green-700"
        onClick={handleDialogOpen}
        ariaLabel="new"
      >
        New
      </Button>
      <AddDialog
        title="Add Note"
        dialogRef={dialogRef}
      />
    </div>
  );
}