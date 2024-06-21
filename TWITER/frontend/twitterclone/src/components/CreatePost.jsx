import React from 'react'
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";



const CreatePost = () => {
  return (
    <div >
     <div>
        <div className='flex items-center justify-between border-b border-gray-200'>
        <div className='hover:bg-gray-200 w-full text-center px-4 py-2'>
            <h1 className='font-semibold text-gray-500 text-lg cursor-pointer'>For You</h1>
        </div>
        <div className='hover:bg-gray-200 w-full text-center px-4 py-2'>
            <h1 className='font-semibold text-gray-500 text-lg cursor-pointer'>Following</h1>
        </div>
      </div>
      {/* twitt section */}
      <div>
        <div className='flex items-center p-4'>
            <div>
            <Avatar src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" size="40" round={true} />
            </div>
            <input className='w-full outline-none border-none text-xl ml-2' type="text" placeholder='What is happening?' />
        </div>

        <div className='flex items-center justify-between p-4 border-b border-gray-200'>
          <div>
            <CiImageOn size={'24px'}/>
          </div>
        <button className='px-4 py-1 border-none text-medium bg-[#109BF0] rounded-full text-white font-bold'>Post</button>

        </div>
      </div>
        </div>
      
    </div>
  )
}

export default CreatePost