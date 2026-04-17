import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  getPublishedCourse  from "../customHooks/getPublishedCourse";
import { useEffect,useState } from 'react';
import Nav from '../component/Nav';
import Card from '../component/Card';
const AllCourses = () => {
  const dispatch = useDispatch();
    // Redux store se data le rahe hain
    getPublishedCourse()
   
    const { courseData } = useSelector(state => state.course); 

    console.log("on allcourse page");
    console.log("courseData : ",courseData)
    const [selectedCategory, setSelectedCategory] = useState("All");

    
    const categories = ["All", ...new Set(courseData?.map(course => course.category))];

    
    const filteredCourses = selectedCategory === "All" 
        ? courseData 
        : courseData?.filter(course => course.category === selectedCategory);
  return (
    <div className="flex flex-col min-h-screen">
            {/* Header / Nav */}
            <Nav />

            {/* Main Wrapper */}
            <div className="flex flex-1 border pt-16">
                {/* Sidebar */}
                <div className="w-[20%] border-r border-gray-200 p-4 bg-gray-50">
                    <h2 className="font-bold text-lg">Categories</h2>
                    {/* Yahan apni categories render karein */}
                    <ul className="space-y-2">
                        {categories.map((cat) => (
                            <li 
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`cursor-pointer p-2 rounded ${selectedCategory === cat ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="w-[80%] p-6">
                    <h1 className="text-2xl font-bold mb-6">All Courses</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courseData?.map((course,index) => (
                            <Card key={index} thumbnail={course.thumbnail} title={course.title} category={course.category} price={course.price} id={course.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AllCourses