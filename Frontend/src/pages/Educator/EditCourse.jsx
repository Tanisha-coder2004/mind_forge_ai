import React, { useEffect } from "react";
import { useState,useRef} from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../assets/empty.jpg";
import { serverUrl } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";
const EditCourse = () => {
  const navigate = useNavigate()
  const [isPublished , setPublished] = useState(false)
  const thumb = useRef();
  const [selectCourseData , setSelectCourseData] = useState(null);
  const {courseId} = useParams();
  const [title,setTitle] = useState("");
  const [subTitle,setSubTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [category,setCategory] = useState("");
  const [level,setLevel] = useState("");
  const [price,setPrice] = useState("");
  const [frontendImage,setFrontendImage] = useState(img);
  const [backendImage,setBackendImage] = useState("");
  const [loading1,setLoading1] = useState(false);
  const [loading2,setLoading2] = useState(false);

  const handleThumbnail = async (e)=>{
    const file = e.target.files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file))
  }
  const getCourseById = async (courseId)=>{
    try {
      const result = await axios.get(serverUrl + `/api/course/getcourse/${courseId}`,{withCredentials:true});
      setSelectCourseData(result.data);
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    console.log(courseId)
    getCourseById(courseId)
  },[])

  useEffect(()=>{
   if(selectCourseData){
    setTitle(selectCourseData.title ||" ");
    setSubTitle(selectCourseData.subTitle ||" ");
    setDesc(selectCourseData.description ||" ");
    setCategory(selectCourseData.category || "");
    setLevel(selectCourseData.level || "");
    setPrice(selectCourseData.price || "");
    setFrontendImage(selectCourseData?.thumbnail || img);
    setPublished(selectCourseData?.isPublished)
   }
  },[selectCourseData])

  const handleEdit = async () => {
    setLoading1(true)
  const formData = new FormData();
  formData.append("title", title);
  formData.append("subTitle", subTitle);
  formData.append("desc", desc);
  formData.append("category", category);
  formData.append("level", level);
  formData.append("price", price);
  formData.append("isPublished", isPublished);
  
  // Only append the file if a new one was selected
  if (backendImage) {
    formData.append("thumbnail", backendImage);
  }

  try {
    const response = await axios.post(
      `${serverUrl}/api/course/editcourse/${courseId}`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setLoading1(false)
    alert("Course updated successfully!");
    navigate("/courses");
  } catch (error) {
    console.error("Error updating course:", error);
    alert("Failed to update course.");
  }
};

const handleCancel = async ()=>{
  try {
    const result = await axios.delete(serverUrl + `/api/course/remove/${courseId}`,{withCredentials:true});
    console.log(result.data);
    toast.success("Course Removed");
     navigate("/courses");
  } catch (error) {
    toast.error(error.response.data.message)
  }
}
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      {/* top bar */}
      <div className="flex items-center justify-between md:justify-between md:flex-row mb-6 relative">
        <FaArrowLeftLong
          onClick={() => navigate("/courses")}
          // className="absolute top-[-20%] left-0 z-20 cursor-pointer"
        />
        {/* <h3>Add detail information regarding course</h3> */}
        <button className="bg-black text-white px-4 py-2 rounded-md" onClick={()=>navigate(`/createLectures/${selectCourseData?._id}`)}>Go to lecture page</button>
      </div>
      {/* form details */}
      <div className="bg-gray-50 p-6 rounded-md">
        <div className="heading text-lg font-medium mb-4">Basic Course Information</div>
        <div className="action space-x-2 space-y-2">
          {isPublished? <button className="bg-green-100 text-green-600 px-4 py-2 rounded-md border" onClick={()=>setPublished(prev=>!prev)}>Click to UnPublish</button>:<button className="bg-green-100 text-green-600 px-4 py-2 rounded-md border" onClick={()=>setPublished(prev=>!prev)}>Click to Publish</button>}
          <button className="bg-red-600 text-white px-4 py-2 rounded-md border">Remove Course</button>
        </div>
        <div className="row1">
          <label htmlFor="title" className="text-sm font-medium text-grey-700 mb-1">Title</label>
          <input type="text" placeholder="create title" id="title" className="w-full border px-4 py-2 rounded-md"onChange={(e)=>setTitle(e.target.value)} value ={title}/>
        </div>
        <div className="row2">
          <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">SubTitle</label>
          <input type="text" placeholder="add subtitle" className="w-full border px-4 py-2 rounded-md" onChange={(e)=>setSubTitle(e.target.value)} value={subTitle} />
        </div>
        <div className="row3">
          <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea type="text" placeholder="description" className="w-full border px-4 py-2 rounded-md h-24 resize-none" onChange={(e)=>setDesc(e.target.value)} value={desc} ></textarea>
        </div>
        <div className="row4 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          {/* category */}
          <div className="col1 flex-1">
            <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">Course Category</label>
            <select name="" id="" className="w-full border px-4 py-2 rounded-md bg-white" onChange={(e)=>setCategory(e.target.value)} value={category}> 
              <option value="">select catogory</option>
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
          <div className="col2 flex-1">
            <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">Course Level</label>
            <select name="" id="" className="w-full border px-4 py-2 rounded-md bg-white" onChange={(e)=>setLevel(e.target.value)} value={level}>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advance">Advance</option>
            </select>
          </div>
          {/* //price */}
          <div className="col3 flex-1">
            <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">Price (INR)</label>
            <input type="number" className="w-full border px-4 py-2 rounded-md" onChange={(e)=>setPrice(e.target.value)} value ={price} />
          </div>
        </div>
        <div className="row5">
          <label htmlFor="" className="text-sm font-medium text-gray-700 mb-1">Course Thumbnail</label>
          <input type="file" className="w-full border px-4 py-2 rounded-md" hidden ref={thumb} accept="image/*" onChange={handleThumbnail}/>
        </div>
        <div className="relative w-[250px] h-[170px] border-amber-800">
          <img src={frontendImage} alt="" className="w-full h-full border border-black rounded-[5px]" onClick={()=>thumb.current.click()}/>
        </div>
        <div className="final-action flex justify-end gap-4 mt-8 pt-6 border-t">
          <button className="px-6 py-2 rounded-lg text-red-600 bg-red-200 hover:bg-red-400 hover:text-white transition" onClick={handleCancel}>cancel</button>
          <button className="px-5  rounded-lg bg-green-800 text-white hover:bg-yellow-400 transition font-semibold" onClick={handleEdit}>save</button>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
