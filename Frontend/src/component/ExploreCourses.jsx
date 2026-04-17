import React from "react";
import { SiViaplay } from "react-icons/si";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { LiaUikit } from "react-icons/lia";
import { MdAppShortcut } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa";
import { AiFillOpenAI } from "react-icons/ai";
import { SiGoogledataproc } from "react-icons/si";
import { SiOpenaigym } from "react-icons/si";
import { BsClipboardData } from "react-icons/bs";

export const ExploreCourses = () => {
  return (
    <div className=" w-full min-h-[50vh] flex flex-col lg:flex-row items-center gap-4 px-6 border">
      {/* left div */}
      <div
        className="w-full lg:w-[35%] lg:h-full h-[400px] flex ml-1
      flex-col items-start justify-center gap-1.5 md:px-10 "
      >
        <span className="text-[#093B3B] text-2xl font-bold">Explore</span>
        <span className="text-2xl lg:text-2xl font-extrabold text-gray-900">Our Courses</span>
        <p className="text-gray-600 text-lg ">
          Lorem ipsum dolor sit amet ipsum hic. Optio maxime obcaecati
          quibusdam, neque nostrum unde blanditiis dolore, recusandae odit fuga
          reiciendis! Expedita. Iusto saepe, facilis, vitae sapiente fugit, iure
          eius pariatur corporis ipsam nobis at nulla explicabo illo enim! Nisi
          Quis, suscipit distinctio.
        </p>
        <button className="flex items-center gap-2 bg-[#093B3B] text-white px-6 py-3 rounded-full font-bold">
          Explore Courses <SiViaplay className="w-5 h-5" />
        </button>
      </div>

      {/* right-div */}
      <div className=" w-[65%] px-3 lg:h-[250px] md:min-h-[300px] flex items-center justify-center
       lg:gap-[55px] gap-[50px] flex-wrap mb-[50px] lg:mb-0">
        <div className="flex flex-col items-center gap-2 w-[140px] group cursor-pointer">
          <div className=" w-22 h-18 flex items-center justify-center bg-yellow-200 rounded-lg">
            <TbDeviceDesktopAnalytics className="w-10 h-10" />
          </div>
          Web development
        </div>

        <div className="flex flex-col items-center gap-2 w-[140px] group cursor-pointer">
          <div className=" w-22 h-18 flex items-center justify-center bg-red-200 rounded-lg">
            <LiaUikit className="w-10 h-10" />
          </div>
            UI/UX Designing
        </div>

        <div className="flex flex-col items-center gap-2 w-[140px] group cursor-pointer ">
          <div className="w-22 h-18 flex items-center justify-center bg-white rounded-lg">
            <MdAppShortcut className="w-10 h-10"/>
          </div>
          App Development
        </div>

        <div className="flex flex-col items-center gap-2 w-[140px] group cursor-pointer">
          <div className="w-22 h-18 flex items-center justify-center bg-amber-200 rounded-lg">
            <FaHackerrank className="w-10 h-10" />
          </div>
          Ethical Hacking
        </div>

        <div className="flex flex-col items-center gap-2 w-[140px] group cursor-pointer">
          <div className=" w-22 h-18 flex items-center justify-center bg-red-200 rounded-lg">
            <AiFillOpenAI className="w-10 h-10" />
          </div>
          AI/ML
        </div>

        <div className="flex flex-col items-center gap-2 w-[140px] group cursor-pointer">
          <div className=" w-22 h-18 flex items-center justify-center bg-white rounded-lg">
            <SiGoogledataproc className="w-10 h-10"/>
          </div>
         Data Science
        </div>

        <div className="flex flex-col items-center gap-2 w-[140px] group cursor-pointer">
          <div className="w-22 h-18 flex items-center justify-center bg-yellow-200 rounded-lg">
            <BsClipboardData className="w-10 h-10"/>
          </div>
          Data Analytics
        </div>

        <div className="flex flex-col items-center gap-2 w-[140px] group cursor-pointer">
          <div className="w-22 h-18 flex items-center justify-center bg-red-200 rounded-lg">
            <SiOpenaigym className="w-10 h-10"/>
          </div>
          AI Tools
        </div>
      </div>
    </div>
  );
};
