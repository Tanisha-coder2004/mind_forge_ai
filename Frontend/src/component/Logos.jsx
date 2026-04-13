import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { SiOpenaccess } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
const Logos = () => {

  const iconStyle = "text-[#093B3B] text-2xl lg:text-3xl";
  const itemStyle = " my-10 flex items-center justify-center gap-5 font-medium text-gray-700 min-w-fit flex-wrap ";
  const eachItem = " px-10 py-3 rounded-[20px] bg-teal-100 flex items-center justify-center"
  return (
    <div className={itemStyle}>
      <div className={eachItem} >
        <MdCastForEducation className={iconStyle}/>
        20k+ online Courses
      </div>
      <div className={eachItem}>
        <SiOpenaccess className={iconStyle}/>
        Lifetime Access
      </div>
      <div className={eachItem}>
        <FaSackDollar className={iconStyle} />
       Value for money
      </div>
      <div className={eachItem}>
        <BiSupport className={iconStyle} />
       Lifetime Support
      </div>
      <div className={eachItem}>
        <FaUsers className={iconStyle}/>
        Community Support
      </div>
    </div>
  );
};

export default Logos;
