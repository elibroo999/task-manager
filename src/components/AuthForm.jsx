import { useState } from 'react'
import { login, register } from '../utils/auth'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    isLogin ? login(email, password) : register(email, name, password)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-soft w-full max-w-sm space-y-4">
      <h2 className="text-2xl font-heading font-bold text-primary text-center">
        {isLogin ? 'Вход' : 'Регистрация'}
      </h2>

      {!isLogin && (
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
        required
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
        required
      />

      <button className="w-full bg-primary hover:bg-blue-800 text-white font-medium py-3 rounded-xl transition">
        {isLogin ? 'Войти' : 'Зарегистрироваться'}
      </button>

      <p className="text-sm text-center text-gray-600">
        {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
        <span
          onClick={() => setIsLogin(!isLogin)}
          className="text-accent font-medium cursor-pointer hover:underline"
        >
          {isLogin ? 'Зарегистрируйтесь' : 'Войдите'}
        </span>
      </p>
    </form>
  )
}
