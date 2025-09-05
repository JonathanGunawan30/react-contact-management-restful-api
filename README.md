# 📇 Contact Management Frontend (React)

A **React Single Page Application (SPA)** for managing users, contacts, and addresses, built to consume the **[Golang Contact Management RESTful API](https://github.com/jonathangunawan30/golang-contact-management-restful-api)**.  
This project is created **for learning purposes only**.

---

## 📌 Features

### **Authentication**
- Register a new user
- Login & store API token in LocalStorage
- Logout (remove token)
- AuthGuard & protected routes

### **User** *(protected)*
- View user profile
- Update profile

### **Contact Management** *(protected)*
- Create a new contact
- View list of contacts (with pagination & search filters)
- View contact details
- Edit contact
- Delete contact

### **Address Management** *(protected)*
- Create address for a contact
- Edit address
- Delete address

---

## 🛠️ Tech Stack

**Language:**
- JavaScript (ES202x)

**Framework & Libraries:**
- [React 19+](https://reactjs.org/) – UI library
- [React Router](https://reactrouter.com/) – Routing
- [react-use](https://github.com/streamich/react-use) – Hooks utilities
- [SweetAlert2](https://sweetalert2.github.io/) – Alerts & modals
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [Font Awesome](https://fontawesome.com/) – Icons
- [Axios](https://axios-http.com/) – API calls

**Backend API:**
- [Golang Contact Management RESTful API](https://github.com/jonathangunawan30/golang-contact-management-restful-api) – Data source

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/JonathanGunawan30/react-contact-management-restful-api.git
cd react-contact-management-restful-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment

Create a .env file in the project root:

```env
VITE_API_BASE_URL=http://localhost:3000
```
Adjust the URL to point to your running Golang API.

### 4. Run the application (development mode)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)
 in your browser.

### 5. Build for production

```bash
npm run build
```

Serve the dist/ folder with any static file server or integrate with backend.

---

## 🔗 Related

Backend Repo: [Golang Contact Management RESTful API](https://github.com/jonathangunawan30/golang-contact-management-restful-api)
