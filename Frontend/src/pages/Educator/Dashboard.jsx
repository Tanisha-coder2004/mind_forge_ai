import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";


const Dashboard = () => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full">
      {/* upper-section */}
      <div className=" min-h-40 px-6 py-10  ">
        <FaArrowLeftLong 
                onClick={()=>navigate("/")}
                className="absolute top-5 left-5 z-20"/>
        {/* creator-profile */}
        <div className="flex flex-col md:flex-row items-center gap-5  h-full max-w-5xl mx-auto p-2 bg-white shadow-md rounded-2xl ">
          {/* img div */}
          {userData.photoUrl ? (
            <div className="">
              <img src={userData?.photoUrl} alt="" />
            </div>
          ) : (
            <div className="w-20 h-20 py-2 rounded-full border-3 border-white bg-teal-600 flex items-center justify-center text-white text-3xl font-semibold shadow-lg">
              {userData?.name.slice(0, 1).toUpperCase()}
            </div>
          )}

          {/* content-div */}
          <div className=" flex flex-col items-center md:items-start space-y-2 min-w-80 ">
            <h1 className="text-2xl font-bold tracking-tight">Welcome ,{userData?.name || "Educator"}</h1>
            <h3>Total Earning : 0</h3>
            <p>{userData?.description || "Start Creating Courses Now"}</p>
            <h1 onClick={()=>navigate("/courses")}
            className="mt-2 text-sm font-bold bg-[#FDC332] text-black px-6 py-2 rounded-lg cursor-pointer hover:bg-yellow-500 transition-all active:scale-95 shadow-md"
              >Create Course</h1>
          </div>
        </div>
      </div>
      {/* lower-section */}
      <div className=" w-full"></div>
    </div>
  );
};

export default Dashboard;
