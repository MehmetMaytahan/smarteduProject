const express = require("express");
const router = express.Router();

const {
  createCourse,
  getAllCourses,
  getCourse,
  enrollCourse,
  releaseCourse
} = require("../controllers/courseController");
const roleMiddleware = require("../middlewares/roleMiddleware");

router.post("/", roleMiddleware(["teacher", "admin"]), createCourse); // http://localhost:3000/courses
router.get("/", getAllCourses);
router.get("/:slug", getCourse);
router.post("/enroll", enrollCourse);
router.post("/release", releaseCourse);

module.exports = router;
