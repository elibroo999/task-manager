import { useState } from 'react'
import { getCurrentUser } from '../utils/auth'
import { getTasks, updateTasks } from '../utils/storage'

export default function TaskList() {
  const [editingId, setEditingId] = useState(null)
  const [editedTitle, setEditedTitle] = useState('')
  const [editedDesc, setEditedDesc] = useState('')

  const userId = getCurrentUser().id
  const tasks = getTasks(userId)

  const toggleDone = (id) => {
    const newTasks = tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    updateTasks(newTasks)
    window.location.reload()
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((t) => t.id !== id)
    updateTasks(newTasks)
    window.location.reload()
  }

  const startEditing = (task) => {
    setEditingId(task.id)
    setEditedTitle(task.title)
    setEditedDesc(task.description)
  }

  const saveEdit = (id) => {
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, title: editedTitle, description: editedDesc } : t
    )
    updateTasks(newTasks)
    setEditingId(null)
    window.location.reload()
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-muted p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-full">
              {editingId === task.id ? (
                <>
                  <input
                    className="w-full p-2 rounded border mb-2"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  <textarea
                    className="w-full p-2 rounded border mb-2"
                    value={editedDesc}
                    onChange={(e) => setEditedDesc(e.target.value)}
                  />
                  <button
                    onClick={() => saveEdit(task.id)}
                    className="text-white bg-accent hover:bg-emerald-600 px-4 py-1 rounded text-sm"
                  >
                    💾 Сохранить
                  </button>
                </>
              ) : (
                <>
                  <h3 className={`font-semibold text-lg ${task.done ? 'line-through text-gray-500' : 'text-primary'}`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(task.createdAt).toLocaleString()}
                  </p>
                </>
              )}
            </div>

            {editingId !== task.id && (
              <div className="flex flex-col space-y-2 ml-4">
                <button onClick={() => toggleDone(task.id)} className="text-accent text-sm hover:underline">
                  {task.done ? '↩️ Вернуть' : '✅ Завершить'}
                </button>
                <button onClick={() => startEditing(task)} className="text-blue-500 text-sm hover:underline">
                  ✏️ Редактировать
                </button>
                <button onClick={() => deleteTask(task.id)} className="text-danger text-sm hover:underline">
                  🗑️ Удалить
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
