import jwt from 'jsonwebtoken'

export const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies?.test
        console.log("tokken is", token ? "YES" : "NO")

        if(!token){
            console.log("No token")
            return res.status(401).json({
                success: false,
                message: "Authentication failed"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Tokken:", decoded);

        // putting decoded data from token as an object in the "req" object
        req.user = decoded;
        next();

    } catch (error) {
        console.log("AUTH Middleware error:", error)
        return res.status(500).json({
            success: false,
            message: "Internal server error (MiddleWare LEVEL)"
        })
        next();
    }
}