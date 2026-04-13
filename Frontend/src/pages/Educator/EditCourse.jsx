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
      <div className="flex items-center justify-between md:justify-between md:flex-row mb-6 relative border">
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
          <button className="bg-green-100 text-green-600 px-4 py-2 rounded-md border">Click to Publish</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md border">Remove Course</button>
        </div>
        <div className="row1">
          <input type="text" placeholder="create title" />
        </div>
        <div className="row2">
          <input type="text" placeholder="add subtitle" />
        </div>
        <div className="row3">
          <input type="text" placeholder="description" />
        </div>
        <div className="row4">
          <div className="col1">
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div className="col2">
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div className="col3">
            <input type="number" />
          </div>
        </div>
        <div className="row5"></div>
        <div className="final-action">
          <button>cancel</button>
          <button>save</button>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
