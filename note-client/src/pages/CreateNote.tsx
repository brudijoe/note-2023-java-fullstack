import * as React from "react";
import {Button} from "../components/Button";
import {Dialog} from "../components/Dialog";

export function CreateNote() {

  function handleDialogOpen() {
    const dialog = document.getElementById("addNoteDialog");
    dialog.showModal();
  }

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
      <Dialog type={"add"} title={"Add Note"} dialogId={"addNoteDialog"}/>
    </div>
  );
}