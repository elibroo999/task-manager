<<<<<<< HEAD
# 📝 Task Manager — React + Vite + TailwindCSS

Простое ToDo-приложение с авторизацией, созданное как тестовое задание. Пользователь может регистрироваться, управлять своими задачами (добавлять, редактировать, отмечать выполненными, удалять), и видеть только свои задачи.

---

## 🚀 Используемые технологии

| Технология         | Назначение                                 |
|--------------------|---------------------------------------------|
| React              | Основной фреймворк UI                      |
| Vite               | Быстрый сборщик и dev-сервер               |
| TailwindCSS        | Стилизация и адаптивная верстка            |
| localStorage       | Хранение данных пользователя и задач       |
| React Router       | Навигация по страницам (`Login`, `Dashboard`) |

---

 📦 Установка и запуск проекта

1. Склонируй или распакуй репозиторий
```
git clone https://github.com/yourname/task-manager.git
cd task-manager
```

2. Установи зависимости
```
npm install
```

3. Запусти приложение в режиме разработки
```
npm run dev
```

4. Сборка для продакшена
```
npm run build
```

🔐 Функциональность

Регистрация и вход по Email + Имя + Пароль
Хранение пользователей и текущего пользователя в localStorage
Каждый пользователь видит только свои задачи


Каждая задача содержит:
Заголовок
Описание
Дата создания
Статус: выполнено / не выполнено


CRUD-операции:
Добавление задачи
Удаление
Завершение
Редактирование — через кнопку ✏️


Tailwind кастомная тема с:
Цветами primary, accent, danger, muted
Шрифтами Inter и Poppins
Красивыми формами и тенями



Структура проекта:

src/
├── components/        // Формы и элементы UI
├── pages/             // Login и Dashboard
├── utils/             // auth.js и storage.js
├── App.jsx            // Маршруты и логика авторизации
├── main.jsx           // Точка входа
└── index.css          // Tailwind базовые стили



UI Особенности
Использует Tailwind Forms и Typography плагины
Удобный и адаптивный дизайн
Анимации при hover и focus
Минимализм без потери функционала



Как протестировать
Зарегистрируйся как новый пользователь
Добавь задачи, поработай с отметкой "выполнено"
Протестируй редактирование
Выйди из системы и зайди под другим email

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> fa9e5433e411f6630d6fd817dc88495dc0994088
