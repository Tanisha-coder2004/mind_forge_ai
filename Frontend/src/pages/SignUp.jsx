import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { serverUrl } from '../App';
import { toast } from 'react-toastify';
import {ClipLoader} from "react-spinners"
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
const SignUp = () => {
    const [show,setShow]=useState(false)
    const navigate = useNavigate()
    const [name , setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [role,setRole]=useState("student")
    const [loading,setLoading]=useState(false)
    const dispatch = useDispatch()

    const handleSignup = async()=>{
        setLoading(true)
        try {
            const result = await axios.post(serverUrl + "/api/auth/signup", {name , password , email , role} , {withCredentials:true})
            console.log(result.data);
            dispatch(setUserData(result.data))
            setLoading(false);
            navigate("/");
            toast.success("Signup Successfully");
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error(error.response.data.message);
            
        }
    }
  return (
    <div className='bg-[#dddbdb] w-screen h-screen flex items-center justify-center'>
        <form action="" className='w-110 h-140 bg-[white] shadow-xl rounded-2xl' onSubmit={(e)=>e.preventDefault()}>
            <div className='w-[100%] h-[100%] flex flex-col items-center justify-center gap-3'>
               <div>
                <h1 className='font-semibold text-[black] text-2xl'>let's get started</h1>
                <h2 className='text-[#999797] text-[18px]'>Create your account</h2>
               </div>
               {/* name */}
               <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
                   <label htmlFor="name" className='font-semibold'>Name</label>
                   <input type="text" id='name' className='border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]'
                    placeholder='Your name' onChange={(e)=>setName(e.target.value)} value={name}/>
               </div>
               {/* email */}
               <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
                   <label htmlFor="email" className='font-semibold'>Email</label>
                   <input type="email" id='email' className='border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]'
                    placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
               </div>
               {/* password */}
               <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative'>
                   <label htmlFor="password" className='font-semibold'>Password</label>
                   <input id='password' type={show ? "text":"password"}
                    className='border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]'
                    placeholder='Your password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    {show ? <IoEyeOutline className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)} />:
                   <IoEye className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)}/>}
               </div>
               {/* role */}
               <div className='flex w-[50%] items-center justify-between'>
                {/* student */}
                <span className={`px-[10px] py-[5px] border-[1px] border-[#e7e6e6] 
                rounded-2xl cursor-pointer hover:border-black ${role==="student" ? "border-black":"border-[#646464]"}`} 
                onClick={()=>setRole("student")}>Student</span>
                {/* educator */}
                <span className={`px-[10px] py-[5px] border-[1px] border-[#e7e6e6] 
                rounded-2xl cursor-pointer hover:border-black ${role==="educator" ? "border-black":"border-[#646464]"}`}
                 onClick={()=>setRole("educator")}>Educator</span>
               </div>
               {/* signup */}
               <button className='w-[80%] h-[40px] bg-black text-white cursor-pointer flex items-center
                justify-center rounded-[5px]' onClick={handleSignup}>{loading ? <ClipLoader size={30} color="white"/>: "SignUp"}</button>
                <div className='w-[80%] flex items-center gap-2'>
                    <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
                    <div className='w-[50%] text-[15px] text-[#6f6f6f] flex items-center justify-center'>Or continue</div>
                    <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
                </div>
                <div className='w-[80%] h-[40px] border-1 border-black justify-center'>
                    <img src="" alt="" className='w-[25px]'/>
                    <span className='text-[18px] text-gray-500'>oogle</span>
                </div>
                <div className='text-[#6f6f6f]'>already have an account?
                    <span className='underline underline-offset-1 text-[black]'
                     onClick={()=>navigate("/login")}>Login</span>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SignUp