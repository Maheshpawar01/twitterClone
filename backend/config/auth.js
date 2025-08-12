import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../config/dotenv" });

const isAuthenticated = async (req, res, next) => {
    try {
        console.log("Received Cookies:", req.cookies); // Debugging Step

        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated. No token found.",
                success: false
            });
        }

        // Verify the token
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: "Invalid or expired token.",
                    success: false
                });
            }

            req.user = decoded.userId;
            next();
        });

    } catch (error) {
        console.error("Authentication Error:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
};

export default isAuthenticated;
