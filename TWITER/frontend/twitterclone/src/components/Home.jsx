import React from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'
import useOtherUsers from '../hooks/useOtherUsers'
import { useSelector } from 'react-redux'
import useGetMyTweets from '../hooks/useGetMyTweets'


const Home = () => {
  const{user, otherUsers} = useSelector(store=>store.user);
  console.log("User ID:", user?._id); // Add this line for debugging

  // custome hoooks
  useOtherUsers(user?._id);
  useGetMyTweets(user?._id)
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
        <LeftSidebar/>
        <Outlet/>
        <RightSidebar otherUsers={otherUsers} />
    </div>
  )
}

export default Home