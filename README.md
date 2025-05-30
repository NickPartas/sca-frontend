# 🕵️‍⬛ SCA Frontend – Spy Cats Dashboard

This is the frontend application for the **Spy Cat Agency** system. It provides a simple interface for managing spy cats via a dashboard.

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)

## 📦 Features

- View all spy cats
- Create a new spy cat (with form validation)
- Update salary of an existing cat
- Delete a cat
- Graceful API error handling
- Minimal, clean UI

## 📂 Folder Structure

sca-frontend/
├── app/
│ ├── cats/
│ │ └── page.tsx # Spy Cats listing & form
│ └── layout.tsx # Layout setup
├── lib/
│ └── api.ts # API wrapper
├── styles/
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── ...

## 🛠️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/sca-frontend.git
cd sca-frontend
```

2. Install dependencies
```bash
npm install
```

3. Configure API base URL
Create a .env.local file:
```
NEXT_PUBLIC_API=http://localhost:8000
```

4. Run the development server
```bash
npm run dev
```

5. Open your browser at http://localhost:3000

## ✅ Requirements Covered
✅ List all spy cats from backend

✅ Add a new spy cat (form with validation)

✅ Edit salary of a spy cat

✅ Delete a spy cat

✅ Graceful error handling

✅ Built with Next.js and TailwindCSS

## 📎 Backend Link
[Backend repository](https://github.com/NickPartas/sca-backend.git)