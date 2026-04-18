import express from "express"
import { addLecture, createCourse, deleteLecture, editCourse, getCourseById, getCourseLectures, getCreatorCourses, getPublishedCourse, removeCourse, updateLecture } from "../controller/courseController.js";
import isAuth from "../middleware/isAuth.js";
import upload from "../middleware/multer.js";
const courseRouter = express.Router();

courseRouter.post("/create",isAuth,createCourse)
courseRouter.get("/getpublished",getPublishedCourse)
courseRouter.get("/getcreator",isAuth,getCreatorCourses)
courseRouter.post("/editcourse/:courseId",isAuth,upload.single("thumbnail"),editCourse)
courseRouter.get("/getcourse/:courseId",isAuth,getCourseById)
courseRouter.delete("/remove/:courseId",isAuth,removeCourse)
courseRouter.post("/createLecture/:courseId",isAuth,addLecture)
courseRouter.delete("/deleteLecture/:courseId/:lectureId",isAuth,deleteLecture);
courseRouter.get("/getLecture/:courseId",isAuth,getCourseLectures)
courseRouter.post("/editLecture/:lectureId",isAuth,upload.single("videoUrl"),updateLecture)

export default courseRouter