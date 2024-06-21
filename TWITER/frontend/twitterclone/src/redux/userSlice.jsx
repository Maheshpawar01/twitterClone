import {createSlice} from "@reduxjs/toolkit";
// import { getMyProfile } from "../../../../backend/controllers/UserController";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        otherUsers:null,
        profile:null
    },
    reducers:{
        //multiple actions
        getUser:(state, action)=>{
            console.log("getUser action payload:", action.payload); // Add this line for debugging

            state.user = action.payload;
        },
        getOtherUsers:(state,action)=>{
            state.otherUsers = action.payload;
        },
        //backend se nahi leke aana (create it like above )
        getMyProfile:(state, action)=>{
            state.profile = action.payload;
        }
    }
});

export const {getUser, getOtherUsers, getMyProfile} = userSlice.actions;
export default userSlice.reducer;