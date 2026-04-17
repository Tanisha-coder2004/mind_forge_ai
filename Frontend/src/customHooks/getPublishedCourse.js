import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setCourseData } from '../redux/courseSlice'

const getPublishedCourse = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    const getCourseData = async ()=>{
        try {
            const result = await axios.get(serverUrl + "/api/course/getpublished",{withCredentials:true})
            console.log("result : ",result);
            console.log("data : ",result.data)
            dispatch(setCourseData(result.data))
        } catch (error) {
            console.log(error)
        }
    }
    getCourseData();
  },[dispatch])
}

export default getPublishedCourse