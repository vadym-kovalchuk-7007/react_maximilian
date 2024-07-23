import { useState } from 'react'

export default function NewTask({ onAdd, onDelete }) {
  const [enteredTask, setEnteredTask] = useState('')

  const handleChange = (event) => {
    setEnteredTask(event.target.value)
  }

  const handleAddTask = () => {
    onAdd(enteredTask)
    setEnteredTask('')
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        type="button"
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddTask}
      >
        Task
      </button>
    </div>
  )
}
