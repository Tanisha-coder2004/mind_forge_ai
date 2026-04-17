import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import { Navigate, Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
export const serverUrl = "http://localhost:8000"
import {ToastContainer} from "react-toastify"
import getCurrentUser from './customHooks/getCurrentUser'
import Profile from './pages/Profile'
import { useSelector } from 'react-redux'
import EditProfile from './pages/EditProfile'
import Dashboard from './pages/Educator/Dashboard'
import Courses from './pages/Educator/Courses'
import CreateCourses from './pages/Educator/CreateCourses'
import getCreatorCourse from './customHooks/getCreatorCourse'
import EditCourse from "./pages/Educator/EditCourse"
import AllCourses from './pages/AllCourses'

function App() {
  getCurrentUser()
  getCreatorCourse()
  const {userData} = useSelector(state=>state.user)
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/signup' element={ <SignUp/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/profile' element ={userData ? <Profile/> : <Navigate to={"/signup"}/>}/>
      <Route path='/editprofile' element={<EditProfile/>}/>
      <Route path='/dashboard' element={userData?.role === "educator" ? <Dashboard />:<Navigate to={"/signup"}/>}/>
      <Route path='/courses' element={userData?.role === "educator" ? <Courses />:<Navigate to={"/signup"}/>}/>
      <Route path='/createcourses' element={<CreateCourses/>}/>
      <Route path='/editcourse/:courseId' element={<EditCourse/>}/>
      <Route path='/allCourses' element={<AllCourses/>}/>
    </Routes>
    
    </>
  )
}

export default App
