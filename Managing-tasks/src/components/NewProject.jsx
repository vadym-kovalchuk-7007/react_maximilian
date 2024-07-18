import { useRef } from 'react'
import Button from './Button'
import Input from './Input'

export default function NewProject({ onAdd }) {
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  const handleSave = () => {
    const enteredTitle = title.current.value
    const enteredDesc = description.current.value
    const enteredDueDate = dueDate.current.value

    onAdd({
      description: enteredDesc,
      dueDate: enteredDueDate,
      title: enteredTitle,
    })
  }
  return (
    <div className="mt-16 w-[35rem]">
      <menu className="my-4 flex items-center justify-end gap-4">
        <li>
          <button type="button" className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            type="button"
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
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
  )
}
