import Course from "../models/courseModel.js";
import User from "../models/userModel.js";

export const enrollInFreeCourse = async (req, res) => {
  try {
    const { courseId, userId } = req.body;

    if (!courseId || !userId) {
      return res.status(400).json({ message: "Course ID and User ID are required" });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if course is actually free
    if (course.price && course.price > 0) {
      return res.status(400).json({ message: "This course requires payment" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if already enrolled
    if (user.enrolledCourses.includes(courseId)) {
      return res.status(400).json({ message: "Already enrolled in this course" });
    }

    // Enroll user
    user.enrolledCourses.push(courseId);
    await user.save();

    // Add student to course
    if (!course.enrolledStudents.includes(userId)) {
      course.enrolledStudents.push(userId);
      await course.save();
    }

    return res.status(200).json({ 
      message: "Successfully enrolled in free course",
      course: course 
    });
  } catch (error) {
    console.error("Free enrollment error:", error);
    return res.status(500).json({ message: "Internal server error during enrollment" });
  }
};
