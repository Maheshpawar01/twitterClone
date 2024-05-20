import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute.js"

dotenv.config({
    path:".env"
})
databaseConnection();
const app = express();


//middlewares
app.use(express.urlencoded({
    extends:true
}));
app.use(express.json())
app.use(cookieParser())

//route

app.use("/api/v1/user", userRoutes)

app.get("/home", (req, res)=>{
    res.status(200).json({
        message:"Comming from backend..."
    })
})

app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server listen at port ${process.env.PORT}`)
})