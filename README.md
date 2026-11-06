# DigiVidya LMS

DigiVidya is a collaborative Learning Management System (LMS) project developed by **Team Dev Putris** for Synapse 2K25, a 24-hour national hackathon organized by Mohan Babu University (MBU), Tirupati.

The platform brings together course management, student enrollment, learning materials, assignments, grading, reviews, and AI-assisted course discovery.

> **Project status:** Hackathon project. The previous Render deployment is currently unavailable, so the application should not be considered a working live demo.

## Features

### Authentication and profiles
- Student and educator roles
- Email and password registration and login
- Google sign-in integration
- OTP-based password reset
- User profiles and enrolled-course information

### Course management
- Create, edit, publish, and manage courses
- Organize courses by category and difficulty level
- Upload course thumbnails and lecture videos
- Manage course lectures and preview settings
- Browse and filter published courses

### AI-assisted course discovery
- Search for courses using natural-language text input
- Voice input through browser speech recognition
- Gemini-assisted query classification
- Search published courses using course information stored in MongoDB

### Enrollment and payments
- Free course enrollment
- Razorpay payment integration for paid courses
- Enrollment records associated with users and courses

### Assignments and grading
- Educators can create assignments with descriptions, due dates, and maximum points
- Students can submit text answers and file attachments
- Educators can review submissions, assign grades, and provide feedback
- Students can view their course grades and overall percentage

### Reviews
- Course ratings and written comments
- One review per user per course, enforced by the review controller

### Educator dashboard
- Course lecture counts
- Student enrollment charts
- An estimated earnings figure based on course prices and enrollment counts
- Assignment management shortcuts

## Technology Stack

| Area | Technologies |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS |
| State management | Redux Toolkit |
| Routing | React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs, Firebase Authentication |
| AI | Google Gemini API |
| Payments | Razorpay |
| File storage | Cloudinary |
| Email | Nodemailer |
| Charts | Recharts |

## Architecture

The application uses a separate frontend and backend.

- **Frontend:** React application responsible for the user interface, navigation, and API requests.
- **Backend:** Express API responsible for authentication, course operations, assignments, reviews, enrollment, payments, and AI-assisted search.
- **Database:** MongoDB stores users, courses, lectures, assignments, submissions, and reviews.
- **External services:** Firebase Authentication, Google Gemini, Razorpay, Cloudinary, and email delivery.

## Repository Structure

```text
DigiVidya-AI/
├── backend/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── customHooks/
│   │   ├── pages/
│   │   └── redux/
│   └── package.json
├── .gitignore
├── QUICK_START.md
└── CHANGELOG.md
```

## Getting Started

Refer to [QUICK_START.md](QUICK_START.md) for the local setup instructions and environment variable names.

The project contains separate frontend and backend package manifests. Install dependencies separately in those directories if you choose to run the application.

## Hackathon

**Synapse 2K25 – National Hackathon**

- Organizer: Mohan Babu University (MBU), Tirupati, Andhra Pradesh
- Dates: October 17–18, 2025
- Duration: 24 continuous hours
- Team: Dev Putris
- Team achievement: Top 10

### Team Members

- Pragati Jaiswal
- Siva Sindhuja Tsundupalli
- Nikhil Jaiswal
- Ramcharan Reddy

## Individual Contribution

My contributions to this collaborative project included:

- Deploying the project to Render during the project period.
- Debugging React components that were not rendering information correctly and fixing those rendering issues.

The project was developed collaboratively by the team. These contributions describe my individual involvement rather than claiming sole authorship of the application.

## Original Repository and Attribution

This repository is a fork of the original project:

[Pragati Jaiswal – DigiVidya-AI](https://github.com/Pragati-Jaiswal3132/DigiVidya-AI)
The application was developed collaboratively by Team Dev Putris.

## Project Limitations

- The previous Render deployment is currently unavailable.
- The documented features are based on source-code inspection; this README does not claim that the current application has passed a fresh end-to-end test.
- External services require their own valid credentials and configuration.
