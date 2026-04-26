# 🚌 School Bus Route Management System

A web-based system designed to manage and display school bus routes with role-based access for administrators and students/parents.

---

## 🚀 Features

* 🔐 Login system with role-based access

  * Admin → Manage routes
  * Student → View routes

* 👨‍💼 Admin Panel

  * Add and update bus routes
  * Modify driver details and timings

* 👨‍🎓 Student View

  * View bus routes, stops, and schedules

* 🔄 Shared Data

  * Admin updates are reflected instantly in student view

---

## 🧠 Tech Stack

* HTML, CSS (Frontend UI)
* JavaScript (Logic & state management)
* LocalStorage (Simulated data persistence)

---

## 💡 System Design

The application is divided into three main components:

### 🔐 Login Page

* Validates user credentials
* Determines user role (Admin / Student)

### 👨‍💼 Admin Interface

* Allows modification of:

  * Routes
  * Timings
  * Driver assignments

### 👨‍🎓 Student Interface

* Displays updated bus routes and schedules

---

## 🔑 Demo Credentials

| Role    | Username | Password   |
| ------- | -------- | ---------- |
| Admin   | admin    | admin123   |
| Student | student  | student123 |

---

## ⚠️ Note

This project is a reconstructed version of an academic system.
Data persistence is simulated using **localStorage** instead of a backend database.

---

## ▶️ How to Run

1. Download or clone the repository
2. Open `login.html` in your browser

---

## 🔮 Future Improvements

* Add backend (REST API with FastAPI)
* Integrate database (MySQL)
* Implement authentication system
* Deploy as full-stack application

---

## 🎯 Project Goal

To demonstrate:

* Role-based access control
* Frontend UI design
* State management across pages
* System-level thinking

---

⚡ *“Design systems. Solve real-world problems.”*
