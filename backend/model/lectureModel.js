import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Lecture title is required"],
        trim: true,
    },
    videoUrl: {
        type: String, // Cloudinary ya kisi bucket ka URL
    },
    // publicId: {
    //     type: String, // Cloudinary delete karne ke kaam aata hai
    // },
    duration: {
        type: String, // e.g., "10:25"
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", // Course model se link karne ke liye
        required: true,
    },
    isPreviewFree:{
        type:Boolean
    }
}, { timestamps: true });

const Lecture = mongoose.model("Lecture", lectureSchema);
export default Lecture;