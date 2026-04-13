import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Profile = () => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate()
  return (
    //Parent
    <div className="min-h-screen bg-[#E8F6F3] flex items-center justify-center p-4">
        {/* Contain */}
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative p-4 ">
        <FaArrowLeftLong 
        onClick={()=>navigate("/")}
        className="absolute top-5 left-5 z-20"/>
            {/* upper-half */}
        <div className="h-28 relative mb-2 flex flex-col items-center gap-1">
          {userData.photoUrl ? (
            <div className="">
              <img src={userData?.photoUrl} alt="" />
            </div>
          ) : (
            <div className="w-15 h-15 py-2 rounded-full border-3 border-white bg-teal-600 flex items-center justify-center text-white text-3xl font-semibold shadow-lg">
                {userData?.name.slice(0, 1).toUpperCase()}
                </div>
          )}
            <h2 className="text-lg font-bold text-gray-800">{userData.name}</h2> 
             <p className="text-[#093B3B] font-medium mb-6 uppercase tracking-wider text-sm">{userData.role}</p>
        </div>
        <div className="w-full space-y-4">
            <div className="flex flex-col border-b border-gray-100 pb-2">
                <span className="text-gray-400 text-xs uppercase font-bold tracking-widest">Email:</span>
                <span className="text-gray-700 font-medium">{userData.email}</span>
            </div>
            <div className="flex flex-col border-b border-gray-100 pb-2">
                <span className="text-gray-400 text-xs uppercase font-bold tracking-widest">Bio:</span>
                <span className="text-gray-700 leading-relaxed italic">{userData.description}</span>
            </div>
            <div className="flex flex-col border-b border-gray-100 pb-2">
                <span className="text-gray-400 text-xs uppercase font-bold tracking-widest">Enrolled Courses:</span>
                <span className=" text-gray-700 px-4 py-1 rounded-full font-bold">{userData.enrolledCourses.length}</span>
            </div>
        </div>
        <div>
            <button onClick={()=>navigate("/editprofile")}
             className="mt-8 w-full bg-[#093B3B] text-white py-4 rounded-xl font-bold">
                Edit Profile
                </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
