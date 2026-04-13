import React, { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img from "../../assets/empty.jpg";
import { useDispatch, useSelector } from "react-redux";
import getCreatorCourse from "../../customHooks/getCreatorCourse";
import { serverUrl } from "../../App";
import axios from "axios";
import { setCreatorCourseData } from "../../redux/courseSlice";

const Courses = () => {
  const navigate = useNavigate();
  const { creatorCourseData } = useSelector((state) => state.course);
    const dispatch = useDispatch()
    const {userData} = useSelector(state=>state.user)
useEffect(()=>{
    const creatorCourses=async()=>{
        try {
            const result = await axios.get(serverUrl + "/api/course/getcreator",{withCredentials:true})
            console.log(result.data);
            dispatch(setCreatorCourseData(result.data))
            
        } catch (error) {
            console.log(error);
        }
    }
    creatorCourses()
   },[userData])

  return (
    <div className="w-full  min-h-screen bg-[#F8FAFC] p-4 md:p-8">
      {/* navbar */}
      <div className="flex justify-between items-center h-20 px-5 mb-8 bg-[#093B3B] rounded-2xl">
        <div className="flex w-50 justify-between items-center">
          <FaArrowLeftLong
            onClick={() => navigate("/dashboard")}
            className="text-white"
          />
          <h2 className="text-white">All Created Courses</h2>
        </div>
        <h1
          onClick={() => navigate("/createcourses")}
          className="bg-[#FDC332] text-white px-6 py-2.5 rounded-xl font-bold 
                hover:bg-[#093B3B] hover:text-white transition-all duration-300 
                shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
        >
          Create Course
        </h1>
      </div>
      {/* table-section */}
      <div className=" max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-5 py-4 text-sm font-bold text-slate-600 uppercase ">
                Courses
              </th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600 uppercase ">
                Price
              </th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600 uppercase ">
                Status
              </th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {creatorCourseData?.map((course, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors w-full text-left ">
                <td className="px-6 py-5 ">
                  {course?.thumbnail ? (
                    <img src={course?.thumbnail} alt="" className="w-20 h-14" />
                  ) : (
                    <img src={img} alt="" className="w-20 h-14" />
                  )}
                  <span>{course.title}</span>
                </td>
                {course?.price ? <td className="px-6 py-5">{course?.price}</td>:<td className="px-6 py-5">NA</td> }
                <td className="px-6 py-5">
                  {course.isPublished ? (<span
                    className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold
                   rounded-full uppercase">
                    Published
                  </span>):(<span
                    className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold
                   rounded-full uppercase">
                    Draft
                  </span>) }
                </td>
                <td className="px-6 py-5">
                  <div className="flex justify-start ">
                    <button className=" p-2 hover:bg-teal-50 hover:text-[#093B3B] rounded-lg transition-all cursor-pointer text-gray-400">
                      <FaRegEdit size={20} onClick={()=>navigate(`/editcourse/${course?._id}`)} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
