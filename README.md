# Predusk Track A – Me-API Playground

This repository contains my submission for **Track A: Backend Assessment ("Me-API Playground")** for the **Intern – Software & AI Developer** role at **Predusk Technology Pvt. Ltd. (ProcessVenue)**.

The goal of this project is to build and host a minimal full-stack application that stores **my real profile information** in a database, exposes it through APIs, and provides a simple frontend to query and view the data.

---

## 🔗 Links

- **GitHub Repository:**  
  https://github.com/JahnaviYelishala1/Predusk-Track-A-Assessment

- **Frontend URL:**  
  _(Will be updated after deployment)_

- **Backend API URL:**  
  _(Will be updated after deployment)_

- **Resume:**  
  https://drive.google.com/file/d/1jJzK9Z00bzy-Ck0D5jLanX_Ij74dP3EX/view?usp=sharing

---

## 🏗️ Architecture

Next.js Frontend (Tailwind CSS)
        |
        |  REST API (CORS enabled)
        v
Node.js + Express Backend
        |
        v
SQLite Database (via Prisma ORM)

**Frontend:** Next.js (App Router), Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **ORM:** Prisma  
- **Database:** SQLite  
- **Data:** Seeded with my real profile, skills, projects, and work experience  

---

## 📁 Project Structure

predusk-track-a/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── migrations/
│   │   └── seed.js
│   ├── src/
│   │   ├── routes/
│   │   │   ├── profile.js
│   │   │   ├── projects.js
│   │   │   ├── skills.js
│   │   │   ├── search.js
│   │   │   └── health.js
│   │   ├── prisma.js
│   │   └── index.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md


---

## 🧩 Database Schema

The database schema is defined using **Prisma** and follows proper relational modeling.

### Core Models
- `Profile`
- `Skill`
- `Project`
- `Work`

### Join Tables
- `ProfileSkill`
- `ProfileProject`
- `ProjectSkill`
- `ProfileWork`

This enables:
- Many-to-many **Project ↔ Skill** mapping  
- Accurate **skill-based project search**
- Clean and normalized data

Schema file:
backend/prisma/schema.prisma


---

## 🔌 API Endpoints

### Health
GET /profile
POST /profile
PUT /profile
### Skills
GET /skills/top
### Projects
GET /projects
GET /projects?skill=Machine%20Learning
### Search
GET /search?q=AI


---




