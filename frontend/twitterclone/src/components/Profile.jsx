import React from "react";
import Avatar from "react-avatar";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-[50%] border-l border-r border-gray-300">
      <div>
        <div className="flex items-center py-2">
          <Link to="/" className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer">
            <IoIosArrowRoundBack size={"24px"} />
          </Link >
          <div className="ml-2">
          <h1 className=" font-bold text-lg">Mahesh</h1>
          <p className="text-gray-500 text-sm"> 10 Post</p>
          </div>
        </div>
        <img
          src="https://i.pinimg.com/originals/1e/e3/c7/1ee3c7f298a5813ff8f8f13907191701.jpg"
          alt="Banner Image"
        />
        <div className="absolute top-52 ml-4 border-4 border-white rounded-full">
        <Avatar src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" size="120" round={true} />

        </div>

          <div className="text-right m-4">
            <button className="px-4 py-1 rounded-full border border-gray-400 hover:bg-gray-200">Edit Profile</button>
          </div>

          <div className="m-4">
            <h1 className="font-bold text-xl">Mahesh</h1>
            <p>@username</p>
          </div>
          <div className="m-4">
            <p>You bio comes here Hello every one this is my bio</p>
          </div>
      </div>
    </div>
  );
};

export default Profile;
