import React, { useEffect } from 'react'
import axios from "axios"
import { USER_API_END_POINT } from '../utils/constant'
const useGetProfile = async(id) => {
   useEffect(()=>{
    try {
      const res = axios.get(`${USER_API_END_POINT}/profile/${id}`)
  } catch (error) {
      console.log(error)
  }
   }, [])
  // return (
  //   <div>useGetUser</div>
  // )
}

export default useGetProfile