# 🚀 Quick Start Guide - DigiVidya LMS

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas connection string)
- npm or yarn

---

## 🔧 Setup Instructions

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder with the following:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_email_app_password
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder with:

```env
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

## ▶️ Running the Application

### Option 1: Using the Startup Script (Recommended)

From the root directory:

```bash
./start-dev.sh
```

This will start both backend and frontend servers simultaneously.

### Option 2: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend will run on: http://localhost:8000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on: http://localhost:5173

---

## 🧪 Testing the Bug Fixes

### Test 1: Course Visibility

1. **As Educator:**
   - Login/Signup as educator
   - Create a new course (navigate to `/createcourses`)
   - Fill in the course details (title and category are required)
   - Click "Create Course"
   - You'll be redirected to `/addcourses/:courseId`
   - Fill in additional details (subtitle, description, price, level, thumbnail)
   - **Important:** Click "Click to Publish" button to publish the course
   - Click "Save" to save changes

2. **As Student:**
   - Login/Signup as student
   - Navigate to `/allcourses`
   - ✅ **Verify:** The published course should now be visible
   - ❌ **Verify:** Unpublished courses should NOT appear

### Test 2: Enrollment Functionality

1. **Test Free Course Enrollment:**
   - As educator, create a course with **price = 0** or leave price empty
   - Publish the course
   - As student, visit `/allcourses`
   - Click on the free course
   - ✅ **Verify:** Price shows as "Free" in green
   - Click "Enroll Now"
   - ✅ **Verify:** Instant enrollment without payment
   - ✅ **Verify:** Button changes to "Watch Now"

2. **Test Paid Course Enrollment:**
   - As educator, create a course with **price > 0** (e.g., ₹499)
   - Publish the course
   - As student, click on the paid course
   - ✅ **Verify:** Price shows as "₹499"
   - Click "Enroll Now"
   - ✅ **Verify:** Razorpay payment gateway opens
   - Complete payment (or use test mode)
   - ✅ **Verify:** After successful payment, enrollment is confirmed
   - ✅ **Verify:** Button changes to "Watch Now"

---

## 📋 Key Features Fixed

✅ **Course Visibility:** Published courses appear in student view  
✅ **Free Enrollment:** Instant enrollment for free courses  
✅ **Paid Enrollment:** Razorpay integration for paid courses  
✅ **UI Improvements:** Proper display of "Free" vs "₹Price"  
✅ **All Routes Connected:** Complete working application

---

## 🐛 Common Issues & Solutions

### Issue: MongoDB Connection Error
**Solution:** Make sure your MongoDB is running or your connection string in `.env` is correct.

### Issue: CORS Error
**Solution:** Backend CORS is configured for `http://localhost:5173` and `http://localhost:5174`. Make sure frontend is running on one of these ports.

### Issue: Razorpay Not Working
**Solution:** 
1. Make sure `VITE_RAZORPAY_KEY_ID` is set in frontend `.env`
2. Make sure Razorpay script is loaded in `index.html`
3. For testing, you can use Razorpay test mode keys

### Issue: Free Courses Not Enrolling
**Solution:** 
1. Verify the course price is set to `0` or left empty
2. Check browser console for errors
3. Verify the `/api/payment/enroll-free` route is accessible

---

## 📁 Project Structure

```
/workspace
├── backend/
│   ├── controllers/
│   │   ├── courseController.js
│   │   ├── orderController.js (MODIFIED)
│   │   └── enrollmentController.js (NEW)
│   ├── routes/
│   │   └── paymentRoute.js (MODIFIED)
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── customHooks/
│   │   │   └── useCourseData.js (MODIFIED)
│   │   ├── pages/
│   │   │   └── ViewCourse.jsx (MODIFIED)
│   │   └── components/
│   │       └── Card.jsx (MODIFIED)
│   └── vite.config.js
├── FIXES_APPLIED.md (Detailed fix documentation)
├── QUICK_START.md (This file)
└── start-dev.sh (Startup script)
```

---

## 🎯 Next Steps

After verifying everything works:
1. Configure your production MongoDB
2. Set up Cloudinary for image/video uploads
3. Configure email service for password reset
4. Deploy to production (Render, Vercel, etc.)

---

## 📞 Support

For issues or questions, refer to:
- `FIXES_APPLIED.md` for detailed technical documentation
- Backend API documentation (if available)
- Original README.md for team info

Happy Learning! 🎓
