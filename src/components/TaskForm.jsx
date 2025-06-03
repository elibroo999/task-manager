import { useState } from 'react'
import { getCurrentUser } from '../utils/auth'
import { addTask } from '../utils/storage'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleAdd = () => {
    if (!title.trim()) return
    const newTask = {
      id: Date.now(),
      title,
      description,
      done: false,
      createdAt: new Date().toISOString(),
      userId: getCurrentUser().id,
    }
    addTask(newTask)
    setTitle('')
    setDescription('')
    window.location.reload()
  }

  return (
    <div className="mb-6">
      <input
        className="w-full p-3 mb-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
        placeholder="Название задачи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-3 mb-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-accent hover:bg-emerald-600 text-white px-5 py-2 rounded-xl transition font-medium"
      >
        Добавить задачу
      </button>
    </div>
  )
}
