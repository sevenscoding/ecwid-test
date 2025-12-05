# Ecwid Cart Integration (Vue 3 + Pinia)

A lightweight cart module built with **Vue 3**, **Pinia**, and **Ecwid API**.  
Provides product loading, cart synchronization, total price calculation, and clean state management.

---

## 🚀 Technologies

- **Vue 3 (Composition API)**
- **Vite**
- **TypeScript**
- **Pinia**
- **Ecwid Storefront API**
- **REST API client**
- **ES Modules**

---

## 📦 Installation

Clone the project:

```bash
git clone https://github.com/username/repo.git
cd repo
```

Install dependencies:

```bash
pnpm install
```

---

## ⚙️ Environment Variables

Create `.env.local` and add:

```env
VITE_ECWID_STORE_ID=108362264
VITE_ECWID_TOKEN=public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs
```

---

## ▶️ Running the Project

```bash
pnpm dev
```

---

## 🛒 Cart Features

- Add / decrease / remove items
- Total price calculation
- Products loading via Ecwid
- localStorage sync
- clearCart() included
