import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { serverUrl } from '../../App';

const CreateLectures = () => {
    const { courseId } = useParams(); // Course ID URL se nikalne ke liye
    console.log(courseId)
    const [title, setTitle] = useState("");
    const [isPreviewFree, setIsPreviewFree] = useState(false);
    const [lectures, setLectures] = useState([]);
    const [loading, setLoading] = useState(false);

    // 1. Fetch existing lectures
    const fetchLectures = async () => {
        try {
            const { data } = await axios.get(serverUrl+`/api/course/getLecture/${courseId}`,{withCredentials:true});
            setLectures(data.lectures);
        } catch (error) {
            console.error("Error fetching lectures", error);
            console.log("Fetch Error:", error.response?.data);
        }
    };

    useEffect(() => {
        fetchLectures();
    }, [courseId]);

    // 2. Handle Add Lecture (Step 1: Title Only)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(serverUrl +`/api/course/createLecture/${courseId}`, { title, isPreviewFree },{withCredentials:true});
            setTitle("");
            setIsPreviewFree(false);
            fetchLectures(); // List refresh karne ke liye
            alert("Lecture added! Now upload video in edit section.");
        } catch (error) {
            console.log("Create Error:", error.response?.data);
            alert("Failed to add lecture");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center md:min-h-screen bg-gray-50 p-6 gap-8">
            {/* Left Side: Add Lecture Form */}
            <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-md h-fit">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Lecture</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Lecture Title</label>
                        <input 
                            type="text" 
                            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. Intro to React"
                            required
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input 
                            type="checkbox" 
                            id="preview"
                            checked={isPreviewFree}
                            onChange={(e) => setIsPreviewFree(e.target.checked)}
                        />
                        <label htmlFor="preview" className="text-sm cursor-pointer">Make this a Free Preview</label>
                    </div>
                    <div className='flex flex-row justify-between'>
                    <button className='py-2 px-4 rounded-lg font-semibold bg-black text-white'>Go Back</button>
                    <button 
                        disabled={loading}
                        className=" bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        {loading ? "Adding..." : "Add Lecture"}
                    </button>
                    </div>
                </form>
            </div>

            {/* Right Side: Lectures List */}
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Course Curriculum</h2>
                <div className="space-y-3">
                    {lectures?.length > 0 ? lectures.map((lecture, index) => (
                        <div key={lecture._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500 w-120">
                            <div>
                                <span className="text-gray-400 text-sm font-bold mr-2">#{index + 1}</span>
                                <span className="font-medium">{lecture.title}</span>
                                {lecture.isPreviewFree && (
                                    <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">Free</span>
                                )}
                            </div>
                            <div className="flex gap-3">
                                <button className="text-blue-600 hover:underline font-medium text-sm">Edit / Upload</button>
                                <button className="text-red-500 hover:underline font-medium text-sm">Delete</button>
                            </div>
                        </div>
                    )) : (
                        <p className="text-gray-500 italic">No lectures added yet. Start by adding one!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateLectures;