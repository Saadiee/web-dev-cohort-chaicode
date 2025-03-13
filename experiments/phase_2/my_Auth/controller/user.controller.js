import User from "../model/User.model.js"
import crypto from 'crypto'
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config();

const registerUser = async(req, res) => {
    
    // get data from frontend
    const {name, email, password} = req.body;

    // validate
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePassword = (password) => {
        // Password must be at least 8 characters long, contain at least one uppercase letter,
        // one lowercase letter, one number, and one special character.
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };
    if (!name || !email || !password) {
        return res.status(400).json({message: "All fields are required"})
    }
    if(!validateEmail(email)){
        return res.status(400).json({message: "Please Enter a valid email adress"})
    }
    if(!validatePassword(password)){
        return res.status(400).json({
            message: "Please Enter a valid password"
        })
    }

    // check if user already exists
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"})
        } // if not create a new user
        const user = await User.create({name, email, password});
        if (!user) {return res.status(400).json({message: "User not registered"})}
        console.log("New user",user)

        // create a token
        const token = crypto.randomBytes(32).toString('hex');
        user.verificationToken = token;
        await user.save();

        // send token to user via email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false,
            auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASSWORD
        }});
        const mailOptions = {
            from:  process.env.NODEMAILER_USER, // sender address
            to: user.email, // list of receivers
            subject: "Verify email Adress ✔", // Subject line
            text: `Link - http://localhost:3000/verify/${user.token}`, // plain text body
            html: `<h1>Verify your email address</h1>
            <p>Click the link below to verify your email address</p>
            <p> Username: ${user.name}</p>
            <p> Email: ${user.email}</p>
            <a href="${process.env.BASE_URL || 'http://localhost:3000'}/verify/${user.token}">Click this link to verify</a>`, // html body
        }

        await transporter.sendMail(mailOptions);


        res.status(200).json({
            message: " User registered sucessfully",
            success: true
        })
    }
        catch (error) {
        console.error("Error in user registration:", error);
        res.status(500).json({ message: "Server error, please try again" });
    }

    

    
}

const verifyUser = async(req, res) => {

    // get token from url
    const {token} = req.params; // variable "token" name is comming form `user.routes.js`
    if(!token){return res.status(400).json({message:"Invalid Token"})};

    // find user from db based on token
    const user = await User.findOne({verificationToken: token})
    if(!user){return res.status(400).json({message:"Invalid Token"})};

    // if user found, set isVerified = true;
    user.isVerified = true;

    // rm verification token
    user.verificationToken = null;

    // save
    await user.save();

    // return res
    res.status(200).json({message:"Email verification successfull"})
}

export {registerUser, verifyUser}