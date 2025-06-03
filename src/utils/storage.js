export function getTasks(userId) {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
  return tasks.filter(task => task.userId === userId)
}

export function addTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

export function updateTasks(userTasks) {
  const allTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
  const userId = JSON.parse(localStorage.getItem('currentUser'))?.id
  const filtered = allTasks.filter(t => t.userId !== userId)
  const updated = [...filtered, ...userTasks]
  localStorage.setItem('tasks', JSON.stringify(updated))
}


