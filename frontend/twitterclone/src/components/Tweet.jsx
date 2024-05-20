import React from 'react'
import Avatar from 'react-avatar';
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";



const Tweet = () => {
  return (
    <div className='border-b border-gray-200'>
        <div>
            <div className='flex p-4'>
            <Avatar src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" size="40" round={true} />
            <div className='ml-2 w-full'>
            <div className='flex items-center '>
            <h1 className='font-bold'>Mahesh</h1>
            <p className='text-gray-500 text-sm ml-2'>@username . 1M</p>
            </div>
            <div>
                <p>Hell you tweetHell you tweetHell you tweet</p>                
            </div>
            <div className='flex justify-between my-3'>
                <div className='flex items-center hover:text-blue-500 cursor-pointer'>
                    <div className='p-2 hover:bg-blue-100 rounded-full '>
                        <FaRegComment size={"20px"}/>
                    </div>
                    <p >0</p>
                </div>
                <div className='flex items-center hover:text-pink-500 cursor-pointer'>
                    <div className='p-2 hover:bg-pink-200 rounded-full   '>
                    <CiHeart size={"24px"}/>
                    </div>
                    <p>0</p>
                </div>
                <div className='flex items-center hover:text-blue-500 cursor-pointer'>
                      <div className='p-2 hover:bg-blue-200 rounded-full '>
                    <CiBookmark size={"24px"}/>

                    </div>
                    <p>0</p>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
  )
}

export default Tweet