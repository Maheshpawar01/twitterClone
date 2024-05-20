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
        console.log
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