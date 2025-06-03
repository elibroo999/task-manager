import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
import { logout, getCurrentUser } from '../utils/auth'

export default function Dashboard() {
  const user = getCurrentUser()

  return (
    <div className="min-h-screen bg-muted py-section px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-soft">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-heading text-primary font-bold">Привет, {user.name}</h1>
          <button
            className="px-4 py-2 text-sm text-danger border border-danger rounded hover:bg-danger hover:text-white transition"
            onClick={logout}
          >
            Выйти
          </button>
        </div>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  )
}
