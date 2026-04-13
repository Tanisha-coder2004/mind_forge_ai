import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../App";
import axios from "axios";
import { setUserData } from "../redux/userSlice";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";

const Nav = () => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showHam, setShowHam] = useState(false);
  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      dispatch(setUserData(null));
      toast.success("LogOut successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <div
        className="w-full h-20 fixed top-0 px-2.5 py-2.5
         flex items-center justify-between bg-[#E8F6F3] z-10"
      >
        <div className="lg:w-[20%] w-[40%] lg:pl-[50px]">
          <img
            src={logo}
            alt=""
            className="w-[60px] rounded-[5px] border-white"
          />
        </div>
        <div className="w-[30%] lg:flex item-center justify-center gap-4 hidden">
          {!userData && (
            <IoPersonCircle
              className="w-[50px] h-[50px] fill-black cursor pointer"
              onClick={() => setShow((prev) => !prev)}
            />
          )}

          {userData && (
            <div
              className="w-[50px] h-[50px] rounded-full text-white flex items-center justify-center 
             text-[20px] border-2 bg-teal-800 border-white cursor-pointer"
              onClick={() => setShow((prev) => !prev)}
            >
              {userData?.name.slice(0, 1).toUpperCase()}
            </div>
          )}

          {userData?.role === "educator" && (
            <div
              className="px-5 py-2.5 border-2 border-white 
             text-white bg-yellow-400 rounded-3xl text-[18px] font-light
              cursor-pointer" onClick={()=>navigate("/dashboard")}
            >
              Dashboard
            </div>
          )}

          {!userData ? (
            <span
              className="px-8 py-2 border-2 border-white text-white rounded-3xl
              text-[18px] font-light cursor-pointer bg-yellow-500"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          ) : (
            <span
              className="px-8 py-2 border-2 border-white text-black rounded-3xl
              text-[18px] font-light cursor-pointer bg-white"
              onClick={handleLogout}
            >
              LogOut
            </span>
          )}

          {show && (
            <div
              className="absolute top-[85%] right-[15%] flex items-center flex-col justify-center gap-2 
           text-[16px] rounded-md bg-teal-800 px-[15px] py-2.5 
           hover:border-white hover:text-white cursor-pointer"
            >
              <span
                className=" text-white px-[30px] py-2.5 rounded-2xl hover:bg-white hover:text-teal-800"
                onClick={() => navigate("/profile")}
              >
                My Profile
              </span>
              <span className=" text-white px-[30px] py-2.5 rounded-2xl  hover:bg-white hover:text-teal-800">
                My Courses
              </span>
            </div>
          )}
        </div>
        <GiHamburgerMenu
          className="w-[35px] h-[35px] md:block text-black cursor-pointer absolute top-5 right-[4%] lg:hidden"
          onClick={() => {
            console.log("hamburger clicked");
            setShowHam((prev) => !prev);
          }}
        />

        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-red-400
          flex items-center justify-center flex-col gap-5 z-5 lg:hidden
            ${showHam ? "translate-x-0 transition duration-600" : "-translate-x-full transition duration-600"}`}
        >
          <IoMdClose
            className="w-[35px] h-[35px] fill-white absolute top-5 right-[4%]"
            onClick={() => {
              setShowHam((prev) => !prev);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
