export function register(email, name, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  if (users.find((u) => u.email === email)) {
    alert('Пользователь уже существует')
    return
  }
  const newUser = { id: Date.now(), email, name, password }
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('currentUser', JSON.stringify(newUser))
  window.location.href = '/dashboard'
}

export function login(email, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const user = users.find((u) => u.email === email && u.password === password)
  if (!user) {
    alert('Неверные данные')
    return
  }
  localStorage.setItem('currentUser', JSON.stringify(user))
  window.location.href = '/dashboard'
}

export function logout() {
  localStorage.removeItem('currentUser')
  window.location.href = '/'
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'))
}
