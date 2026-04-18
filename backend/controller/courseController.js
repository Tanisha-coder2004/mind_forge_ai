import uploadOnCloudinary from "../config/cloudinary.js";
import Course from "../model/courseModel.js";
import Lecture from "../model/lectureModel.js";
export const createCourse = async(req,res)=>{
    try {
        const {title,category} = req.body;
        if(!title || !category){
           return res.status(400).json({
            message:"title or category is required"
           })
        }
        const course = await Course.create({title,category,creator:req.userId})
        return res.status(200).json(course)
    } catch (error) {
        return res.status(400).json({
            message:`create course error ${error}`
           })
    }
}

export const getPublishedCourse = async(req,res)=>{
    try {
        const courses = await Course.find({isPublished:true})
        if(!courses){
            return res.status(400).json({
            message:"courses not found"
           })
        }
        return res.status(200).json(courses)
    } catch (error) {
        return res.status(500).json({
            message:`failed to find isPublished courses ${error}`
           })
    }
}

export const getCreatorCourses  = async(req,res)=>{
    try {
        
        const userId = req.userId
        const courses = await Course.find({creator:userId})
        if(!courses){
            return res.status(400).json({
            message:"Courses not found"
           })
        }
        return res.status(200).json(courses)

    } catch (error) {
        return res.status(500).json({
            message:`failed to get creator courses ${error}`
           })
    }
}

export const editCourse = async(req,res)=>{
    try {
        
      const {courseId} = req.params
      const {title,subTitle,description,category,level,isPublished,price} = req.body;
      let thumbnail;
      if(req.file){
        thumbnail = await uploadOnCloudinary(req.file.path)
      }

      let course = await Course.findById(courseId);
      if(!course){
        return res.status(400).json({
            message:"course is not found"
           })
      }
      const updateData = {title,subTitle,description,category,level,isPublished,price,thumbnail}
      course = await Course.findByIdAndUpdate(courseId,updateData,{new:true})
      return res.status(200).json(course)

    } catch (error) {
        return res.status(500).json({
            message:`failed to edit course ${error}`
        })
    }
}

export const getCourseById = async (req,res)=>{
    try {
        const {courseId} = req.params;
         let course = await Course.findById(courseId);
      if(!course){
        return res.status(400).json({
            message:"course is not found"
           })
      }
       return res.status(200).json(course)

    } catch (error) {
         return res.status(500).json({
            message:`failed to get course by id ${error}`
        })
    }
}

export const removeCourse = async(req,res)=>{
    try {
        const {courseId} = req.params;
         let course = await Course.findById(courseId);
      if(!course){
        return res.status(400).json({
            message:"course is not found"
           })
      }
      course = await Course.findByIdAndDelete(courseId,{new:true})
      return res.status(200).json({
        message:"course removed"
      })
    } catch (error) {
         return res.status(500).json({
            message:`failed to delete course ${error}`
        })
    }
}

export const addLecture = async (req, res) => {
    const { courseId } = req.params;
    const { title,isPreviewFree} = req.body;
   if (!title) return res.status(400).json({ message: "Title is required" });

    // 1. Create Lecture
   const lecture = await Lecture.create({ 
            title, 
            courseId,
            isPreviewFree: isPreviewFree || false // Default false agar nahi bheja toh
        });

    // 2. Update Course
    await Course.findByIdAndUpdate(courseId, {
        $push: { lectures: lecture._id }
    });

    res.status(201).json({ message: "Lecture added successfully!" });
};


export const updateLecture = async (req, res) => {
    try {
        const { lectureId } = req.params;
        const { title, isPreviewFree } = req.body;
        
        let updateData = { title, isPreviewFree };

        // Agar video file aayi hai toh upload karo
        if (req.file) {
            const videoUrl = await uploadOnCloudinary(req.file.path);
            if (videoUrl) {
                updateData.videoUrl = videoUrl;
            }
        }

        const updatedLecture = await Lecture.findByIdAndUpdate(
            lectureId, 
            updateData, 
            { new: true }
        );

        res.status(200).json({ message: "Lecture updated successfully!", updatedLecture });
    } catch (error) {
        res.status(500).json({ message: "Error updating lecture" });
    }
};


export const deleteLecture = async (req, res) => {
    try {
        const { lectureId, courseId } = req.params;

        // 1. Database se lecture delete karo
        const lecture = await Lecture.findByIdAndDelete(lectureId);

        if (!lecture) {
            return res.status(404).json({ message: "Lecture not found" });
        }

        // 2. Course ke lectures array se is ID ko remove karo
        await Course.findByIdAndUpdate(courseId, {
            $pull: { lectures: lectureId } // $pull array se specific item hatata hai
        });

        res.status(200).json({ message: "Lecture deleted successfully from DB" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting lecture" });
    }
};

export const getCourseLectures = async (req, res) => {
    try {
        const { courseId } = req.params;

        // Hum Course model mein lectures populate bhi kar sakte hain 
        // ya directly Lecture model se filter kar sakte hain.
        const lectures = await Lecture.find({ courseId: courseId });

        if (!lectures || lectures.length === 0) {
            return res.status(404).json({ message: "No lectures found for this course" });
        }

        res.status(200).json({ 
            success: true, 
            lectures 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching lectures" });
    }
};