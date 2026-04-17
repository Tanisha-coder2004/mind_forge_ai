import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const CardPage = () => {
  const {courseData} = useSelector(state=>state.course)
  const [popularCourses,setPopularCourses] = useState([]);
  useEffect(()=>{
   
      console.log("courseData : ",courseData)
      // setPopularCourses((courseData||[]).slice(0,6))
    // setPopularCourses(courseData.slice(0,6))
    const slicedData = courseData?.slice(0, 6);
      console.log("Setting Popular Courses with:", slicedData); // Check here
      setPopularCourses(slicedData);
      console.log("PopularCourses",popularCourses)
  },[courseData])

  return (
    <div className="w-full px-8 py-4">
      <div className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Our Popular Courses</h1>
      </div>
      <span className="text-gray-600 max-w-2xl mx-auto">
       Explore our top-rated courses designed to help you master new skills 
          and advance your career in tech and design and unlock opportunities in tech , AI, business, and beyond
      </span>
      {/* //main */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 justify-items-center">
        {popularCourses?.map((course,index)=>{
         return <Card key={index} thumbnail={course.thumbnail} title={course.title} category={course.category} price={course.price} id={course.id} />
       
      })}
      </div>
    </div>
  );
};

export default CardPage;
