import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const Register = async(req, res)=>{
    try{
        const{name, username, email, password} = req.body;
        if(!name || !username || !email || !password){
            return res.status(400).json({
                message:"All fields are rerquired,",
                success:false,
            })
        }

    const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User already exist",
                success:false
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 10) 

        await User.create({
            name,
            username,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            message:"Account Created successfully.",
            success:true
        })

    }catch(error){
        console.log(error)
    }
}


//Login

export const Login = async(req, res) =>{
    try {
        const {email, password} = req.body;

        //validate input
        if(!email || !password){
            return res.status(400).json({
                message:"All fields are rerquired,",
                success:false,
            })
        };

        //find the user by email
        //changed from "User" user for the instance
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"User does not exist with this email id",
                success:false
            })
        }

        // compare ppasswords
        //changed from "User" to 'user' for the instance
        const isMatch = await bcryptjs.compare(password,user.password )
        if(!isMatch){
            return res.status(401).json({
                message:"Incorrect email or password",
                success:false
            });
        }

        //Genrate a JWT token
        //changed from "user" to 'user' for the instance

        const token = await jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: "1d"})
        return res.status(201).cookie("token", token, {
            expiresIn:"1d", 
            httpOnly:true
        }).json({
            message:`welcome back ${user.name}`,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

//Logout 
export const logout = async(req, res)=>{
    return res.cookie("token", "",{
        expiresIn:new Date(Date.now())}).json({
            message:"User logged out successfully.",
            success:true
        })
}

//bookmark(user save tweet id not not tweet save user id thats why bookmark comes in userController not in tweetConntroller)

export const bookmark = async (req, res)=>{
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const user = await User.findById(loggedInUserId);
        if (!user) {
            // If user is not found, return a 404 error
            return res.status(404).json({
              message: "User not found"
            });
          }

    if(user.bookmarks.includes(tweetId)){
        //remove bookmark
        await User.findByIdAndUpdate(loggedInUserId, {$pull: {bookmarks:tweetId}});
        res.status(200).json({
            message:"Already bookmarked"
        })
    }else{
        //bookmark
        await User.findByIdAndUpdate(loggedInUserId, {$push: {bookmarks:tweetId}});
        res.status(200).json({
            message:"Added into bookmarkes"
        })
    }
    } catch (error) {
        console.log(error);
    }
}