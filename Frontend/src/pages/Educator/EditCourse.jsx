import React from "react";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const EditCourse = () => {
  const navigate = useNavigate()
  const [isPublished , setPublished] = useState(false)
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      {/* top bar */}
      <div className="flex items-center justify-between md:justify-between md:flex-row mb-6 relative">
        <FaArrowLeftLong
          onClick={() => navigate("/courses")}
          // className="absolute top-[-20%] left-0 z-20 cursor-pointer"
        />
        {/* <h3>Add detail information regarding course</h3> */}
        <button className="bg-black text-white px-4 py-2 rounded-md">Go to lecture page</button>
      </div>
      {/* form details */}
      <div className="bg-gray-50 p-6 rounded-md">
        <div className="heading text-lg font-medium mb-4">Basic Course Information</div>
        <div className="action space-x-2 space-y-2">
          {isPublished? <button className="bg-green-100 text-green-600 px-4 py-2 rounded-md border" onClick={()=>setPublished(prev=>!prev)}>Click to UnPublish</button>:<button className="bg-green-100 text-green-600 px-4 py-2 rounded-md border" onClick={()=>setPublished(prev=>!prev)}>Click to Publish</button>}
          <button className="bg-red-600 text-white px-4 py-2 rounded-md border">Remove Course</button>
        </div>
        <div className="row1">
          <label htmlFor="title" className="text-sm font-medium text-grey-700 mb-1">Title</label>
          <input type="text" placeholder="create title" id="title" className="w-full border px-4 py-2 rounded-md"/>
        </div>
        <div className="row2">
          <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">SubTitle</label>
          <input type="text" placeholder="add subtitle" className="w-full border px-4 py-2 rounded-md" />
        </div>
        <div className="row3">
          <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea type="text" placeholder="description" className="w-full border px-4 py-2 rounded-md h-24 resize-none" ></textarea>
        </div>
        <div className="row4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          {/* category */}
          <div className="col1 flex-1">
            <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">Course Category</label>
            <select name="" id="" className="w-full border px-4 py-2 rounded-md bg-white">
              <option value="">select catogory</option>
              <option value="Web development">Web development</option>
              <option value="UI/UX Designing">UI/UX Designing</option>
              <option value="App Development">App Development</option>
              <option value="Ethical Hacking">Ethical Hacking</option>
              <option value="AI/ML"> AI/ML</option>
              <option value="Data Science">Data Science</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="AI Tools">AI Tools</option>
            </select>
          </div>
          <div className="col2 flex-1">
            <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">Course Level</label>
            <select name="" id="" className="w-full border px-4 py-2 rounded-md bg-white">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advance">Advance</option>
            </select>
          </div>
          {/* //price */}
          <div className="col3 flex-1">
            <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">Price (INR)</label>
            <input type="number" className="w-full border px-4 py-2 rounded-md" />
          </div>
        </div>
        <div className="row5">
          <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">Course Thumbnail</label>
          <input type="file" className="w-full border px-4 py-2 rounded-md"/>
        </div>
        <div className="final-action flex justify-end gap-4 mt-8 pt-6 border-t">
          <button className="px-6 py-2 rounded-lg text-red-600 bg-red-200 hover:bg-red-400 hover:text-white transition">cancel</button>
          <button className="px-5  rounded-lg bg-green-800 text-white hover:bg-yellow-400 transition font-semibold">save</button>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
