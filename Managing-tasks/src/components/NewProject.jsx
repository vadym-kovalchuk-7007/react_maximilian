import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;
    const enteredDueDate = dueDate.current.value;

    for (const el of [enteredTitle, enteredDesc, enteredDueDate]) {
      if (el.trim() === "") {
        modal.current.open();
        return;
      }
    }

    onAdd({
      description: enteredDesc,
      dueDate: enteredDueDate,
      title: enteredTitle,
    });
  };
  return (
    <>
      <Modal ref={modal} btnCaption="Close">
        <h2 className="mt-4 text-xl font-bold text-stone-700">
          Invalid or empty input
        </h2>
        <p className="mb-4 text-stone-600">
          Oops... All fields must be fullfilled
        </p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="my-4 flex items-center justify-end gap-4">
          <li>
            <button
              type="button"
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              type="button"
              className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
