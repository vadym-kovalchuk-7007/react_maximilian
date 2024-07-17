import Button from "./Button";
import Input from "./Input";

export default function NewProject() {
  return (
    <div className="mt-16 w-[35rem]">
      <menu className="my-4 flex items-center justify-end gap-4">
        <li>
          <button type="button" className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <Button>Save</Button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
