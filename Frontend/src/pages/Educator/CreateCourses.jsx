import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";


const CreateCourses = () => {
  const navigate = useNavigate();
  const [title,setTitle] = useState("");
  const [category,setCategory]= useState("");
  const [loading,setLoading] = useState(false)

  const handleCreateCourse = async ()=>{
    
    console.log('handle create called');
    
    setLoading(true)
    try {
     
      const result = await axios.post(serverUrl+"/api/course/create",{title,category} ,{withCredentials:true})
      console.log(result.data);
      navigate("/courses")
      setLoading(false)
      toast.success("Course Created")
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#E8F6F3]">
      <div className="bg-white w-full min-h-100 max-w-xl rounded-xl shadow-xl overflow-hidden border border-teal-50 p-4 flex flex-col gap-2">
        <div className=" bg-[#093B3B] p-6 text-white flex items-center gap-20 rounded-lg">
          <FaArrowLeftLong onClick={()=>navigate("/courses")}/>
          <h1>Create Course</h1>
        </div>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
          <div className="flex flex-col gap-2 p-2">
            <label htmlFor="">Course Title</label>
            <input onChange={(e)=>setTitle(e.target.value)} value={title}
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#093B3B] focus:ring-2 focus:ring-[#093B3B]/10 outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <label htmlFor="">Course Category</label>
            <select onChange={(e)=>setCategory(e.target.value)}
              name=""
              defaultValue=""
              id="cat"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#093B3B] outline-none transition-all cursor-pointer appearance-none bg-no-repeat bg-position-[right_1rem_center]"
            >
              <option value="" disabled>
                Select the Category
              </option>
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
          <div className="p-2  mt-7 flex justify-center">
            <button type="submit" className=" px-4 py-2  bg-amber-300 w-full rounded-xl " onClick={()=>handleCreateCourse()} >
            Create
            </button>
            </div>
          
        </form>
      </div>
    </div>
  );
};

export default CreateCourses;
