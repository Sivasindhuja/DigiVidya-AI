# Local Setup Guide

This guide describes how to configure the DigiVidya LMS frontend and backend for local development.

**Note:** These instructions have been prepared from the repository configuration and source code. The application has not been run or tested as part of this documentation cleanup.

## Prerequisites

- Node.js and npm
- MongoDB connection
- Git
- Credentials for the external services used by the features you intend to configure

The frontend uses Vite 6, so use a Node.js version supported by that Vite release.

## 1. Clone the repository

```bash
git clone https://github.com/Sivasindhuja/DigiVidya-AI.git
cd DigiVidya-AI
```

## 2. Configure the backend

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory.

The following environment variable names are referenced in the backend source:

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret

EMAIL=your_email_address
EMAIL_PASS=your_email_app_password
```

Replace the example values with your own credentials. Do not commit the `.env` file.

Start the backend:

```bash
npm run dev
```

The backend uses port `8000` by default.

## 3. Configure the frontend

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```env
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

The Firebase configuration also contains project-specific settings in the frontend source.

Start the frontend:

```bash
npm run dev
```

Vite normally serves the frontend at:

```text
http://localhost:5173
```

## 4. Development commands

### Backend

```bash
npm run dev
npm start
```

### Frontend

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

Run these commands from the corresponding `backend/` or `frontend/` directory.

## 5. Optional startup script

The repository includes `start-dev.sh`, a Bash script intended to start both development servers. It also installs dependencies if their `node_modules` directories are missing.

It is intended for Bash-compatible environments and is not a cross-platform Windows startup command.

## External services

Depending on the functionality being used, the application integrates with:

- MongoDB for application data
- Firebase Authentication for Google sign-in
- Google Gemini for AI-assisted course search
- Cloudinary for uploaded media
- Razorpay for payment processing
- Nodemailer-compatible email delivery for OTP messages

Configure the required credentials before using the corresponding functionality.

## Important Notes

- Never commit `.env` files or private API credentials.
- The frontend and backend have separate dependency manifests.
- The previous hosted deployment is currently unavailable.
- This guide documents configuration names found in the source; it does not guarantee that every external integration is currently operational.
