# Rensselaer Cybersecurity Collaboratory (RCC) Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A full-stack web application developed for the Rensselaer Cybersecurity Collaboratory (RCC) to establish a public-facing website and Capture The Flag (CTF) management system. The platform addresses three core requirements: a public website, a centralized CTF write-up repository, and an interactive challenge management interface. 

## Features

* **Public Website:** Displays RCC achievements, member profiles, events calendar, and alumni portal with engagement and donation functionality
* **CTF Knowledge Management System:** Secure CRUD interface for authorized users to manage Capture The Flag write-ups and challenge documentation
* **Interactive Challenge Platform:** Integrated coding environment with compiler for practicing CTF exercises
* **Accessibility Compliance:** Implemented WCAG standards with screen reader compatibility and WAVE tool validation


## Tech Stack
* **Frontend:** React, Bootstrap
* **Backend:** Node.js, Express.js, Mongoose
* **Database:** MongoDB

# Rensselaer Cybersecurity Collaboratory (RCC) Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A full-stack web application developed for the Rensselaer Cybersecurity Collaboratory (RCC) to establish a public-facing website and Capture The Flag (CTF) management system. The platform addresses three core requirements: a public website, a centralized CTF write-up repository, and an interactive challenge management interface. 

## Features

* **Public Website:** Displays RCC achievements, member profiles, events calendar, and alumni portal with engagement and donation functionality
* **CTF Knowledge Management System:** Secure CRUD interface for authorized users to manage Capture The Flag write-ups and challenge documentation
* **Interactive Challenge Platform:** Integrated coding environment with compiler for practicing CTF exercises
* **Accessibility Compliance:** Implemented WCAG standards with screen reader compatibility and WAVE tool validation


## Tech Stack
* **Frontend:** React, Bootstrap
* **Backend:** Node.js, Express.js, Mongoose
* **Database:** MongoDB

## System Architecture
A modular architecture supporting the RCC platform's core functions:
* **Public Website:** React single-page application for donor outreach
* **CTF Management API:** Express.js backend with REST endpoints for write-up administration
* **Data Processing Engine:** Custom pipelines for CTF content ingestion
* **Persistence:** MongoDB document store for CTF data

## Installation & Usage

**Note on Code Availability:** This repository contains the complete frontend application. The backend CTF Management System, a functional Express.js API with MongoDB, was successfully delivered to the client. The live backend infrastructure is no longer available, and thus the operational code is not included here. The architecture and implementation are detailed in the sections below.

### Prerequisites
* **Node.js (v14 or higher)**
* **npm or yarn package manager**

### Public Website  
#### Installation & Setup
```bash
cd rcc-website
npm install
npm start
```
#### Access
* Application URL: `http://localhost:3000`


## Project Structure
rcc-platform/
├── Project Documents/          # Planning & documentation
├── rcc-website/                # React frontend (Public Website)
│   ├── public/                 # Static assets (images, videos)
│   └── src/
│       ├── components/         # React components
│       └── pages/              # Main pages (Home, Events, etc.)
├── rcc-ctf-db/                 # Express.js backend (CTF API)
│   ├── DB_interaction.js       # Main server file
│   └── *.json                  # CTF data exports
├── rcc-ctf-frontend/           # CTF interface wireframes
├── LICENSE
└── README.md


## Team & Contributions

This project was developed as part of the IT Resources Management curriculum at Rensselaer Polytechnic Institute by a team of four students using parallel development streams.

**My Contributions - CTF Backend System:**

I co-developed the CTF Management System backend with one other developer. My technical contributions included:

* **Backend Architecture:** Engineered Express.js server with RESTful endpoints for CTF data management

* **Database Design:** Implemented MongoDB schemas and integration for storing write-ups and challenge data

* **API Development:** Built and optimized CRUD operations for CTF write-up management

* **System Implementation:** Developed a functional standalone backend service
    

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.