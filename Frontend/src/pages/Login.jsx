import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../App';
import { toast } from 'react-toastify';
import {ClipLoader} from "react-spinners"
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
import axios from 'axios';
const Login = () => {
 const [show,setShow]=useState(false);
 const [email,setEmail]= useState("");
 const [password,setPassword] = useState("");
  const [loading,setLoading]=useState(false);
 const navigate = useNavigate()
const dispatch = useDispatch();
 const handleLogin = async(e)=>{
  if(e)  e.preventDefault();
    setLoading(true);
    try {
         const result = await axios.post(serverUrl + "/api/auth/login", {email , password} , {withCredentials:true})
            console.log(result.data);
            dispatch(setUserData(result.data))
            setLoading(false);
            toast.success("Login Successfully");
            navigate("/");
           
        
    } catch (error) {
        console.log(error);
         setLoading(false);
        toast.error(error.response.data.message);
    }

 }
   return (
     <div className='bg-[#dddbdb] w-screen h-screen flex items-center justify-center'>
         <form action="" className='w-110 h-140 bg-[white] shadow-xl rounded-2xl' onSubmit={(e)=>e.preventDefault}>
             <div className='w-full h-full flex flex-col items-center justify-center gap-3'>
                <div>
                 <h1 className='font-semibold text-[black] text-2xl'>Welcome back</h1>
                 <h2 className='text-[#999797] text-[18px]'>Login in your account</h2>
                </div>
                {/* email */}
                <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
                    <label htmlFor="email" className='font-semibold'>Email</label>
                    <input type="email" id='email' className='border w-full h-[35px] border-[#e7e6e6] text-[15px] px-5'
                     placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                {/* password */}
                <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative'>
                    <label htmlFor="password" className='font-semibold'>Password</label>
                    <input id='password' type={show ? "text":"password"}
                     className='border w-full h-[35px] border-[#e7e6e6] text-[15px] px-5'
                     placeholder='Your password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                     {show ? <IoEyeOutline className='absolute w-5 h-5 cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)} />:
                    <IoEye className='absolute w-5 h-5 cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)}/>}
                </div>
                
                <button className='w-[80%] h-10 bg-black text-white cursor-pointer flex items-center
                 justify-center rounded-[5px]' type='submit' onClick={handleLogin}>{loading ? <ClipLoader size={30} color="white" />:"Login"}</button>

                 <span className='text-[13px] cursor-pointer text-[#585757]'>Forget your password?</span>
                 <div className='w-[80%] flex items-center gap-2'>
                     <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
                     <div className='w-[50%] text-[15px] text-[#6f6f6f] flex items-center justify-center'>Or continue</div>
                     <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
                 </div>
                 
                 <div className='text-[#6f6f6f]'>Create new account
                    <span className='underline underline-offset-1 text-[black]'
                     onClick={()=>navigate("/signup")}>SignUp</span>
                </div>
             </div>
         </form>
     </div>
   )
}

export default Login