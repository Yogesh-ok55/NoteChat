# 🚀 NoteChat

A full-stack MERN-based real-time note sharing and chat platform that enables users to share notes, collaborate through live chat, and interact in a shared environment.

---

## 🎓 Academic Project Information

### 📄 Project Report of Industry Oriented Hands-On Experience (IOHE)

**Project Title:** NoteChat

Submitted in partial fulfillment of the requirements for the award of degree of:

### 🎓 Bachelor of Engineering  
Computer Science and Engineering  
Chitkara University , Rajpura


---

## 👨‍💻 Submitted By

- **Yogesh Choudhary** — 2210990986  
- **Aastik Mehta** — 2210991131 
- **Arshia Sharma** — 2210991368   

---

## 👩‍🏫 Supervised By

- **Dr. Lalit Sharma**   
- Chitkara University, Rajpura  

---

## 📊 Project Status

✅ Completed  

---

## 📌 Project Type

- Industry Oriented Hands-On Experience (IOHE)  
- Full Stack + Real-Time Collaboration System  

---

## 🌟 Features

* 🔐 **Authentication**  
  - Secure user registration and login  
  - Session management & protected routes  

* 💬 **Real-Time Chat**  
  - Live messaging using Socket.io  
  - Group and private conversations  

* 📝 **Note Sharing**  
  - Upload and share notes with the community  
  - React and comment on notes  

* 👥 **User Profiles**  
  - Personal profiles with note management  
  - Follow/unfollow users  

* ⚡ **Modern UI**  
  - Styled Components + Responsive design  

---

## 🛠️ Tech Stack

### Frontend

* React  
* Styled Components  
* Redux Toolkit  
* Axios  
* Socket.io Client  

### Backend

* Node.js  
* Express.js  
* MongoDB (Mongoose)  
* Bcrypt  
* Socket.io  

### Real-Time Communication

* Socket.io for chat  

---


## 📂 Project Structure

```
NoteChat/
│
├── backend/
│   ├── database/
│   ├── model/
│   ├── routes/
│   ├── public/
│   ├── index.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── component/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── .env
│   └── package.json
│
├── socket/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/notechat.git
cd notechat
```

---

### 2️⃣ Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

#### Socket

```bash
cd socket
npm install
```

---

## 🔑 Environment Variables

### Backend `.env`

```env
PORT=8000
URL=mongodb://localhost:27017/NoteChat
```

### Frontend `.env`

```env
REACT_APP_PUBLIC_FOLDER=http://localhost:8000/images/
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd backend
npm start
```

### Start Socket

```bash
cd socket
npm start
```

### Start Frontend

```bash
cd frontend
npm start
```