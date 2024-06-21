import React, { useEffect } from 'react';
import axios from "axios";
import { TWEET_API_END_POINT } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getAllTweets } from '../redux/tweetSlice';

// Custom hook to fetch tweets
const useGetMyTweets = (id) => {
  const dispatch = useDispatch(); // Ensure this is called within a Provider context

  useEffect(() => {
    const fetchMyTweets = async () => {
      try {
        const res = await axios.get(`${TWEET_API_END_POINT}/alltweets/${id}`, {
          withCredentials: true
        });
        console.log(res);
        dispatch(getAllTweets(res.data.tweets)); // Dispatch action to update store
      } catch (error) {
        console.log(error);
      }
    }

    fetchMyTweets();
  },[id]); // Include dispatch in the dependency array
};

export default useGetMyTweets;
