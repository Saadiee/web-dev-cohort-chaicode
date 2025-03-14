import User from "../model/User.model.js"
import crypto from 'crypto'
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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

const loginUser = async(req, res) => {

    const {name, email, password} = req.body;
    if (!name || !email || !password) {return res.status(400).json({message: "All fields are required"})}

    try {
        const user = await User.findOne({email});
        if(!user)
            {return res.status(400).json({message: "Invalid email or password"})}
        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
            {return res.status(400).json({message: "Invalid email or password"})}
        if(!user.isVerified)
            {return res.status(400).json({message: "Please verify your email adress"})}

        // Integrating JWT
        const jwtToken = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
        // creating JWT cookie
        const cookieOpt = {
            httpOnly: true,
            secure: true,
            maxAge: 24*60*60*1000,
        }
        res.cookie("test", jwtToken, cookieOpt)

        res.status(200).json({
            success: true,
            message: "Login sucessfull",
            user: {
                id: user._id,
                name: user.name,
                role: user.role
            }
        })

    } catch (error) {
        console.log(error)
    }
}

export {registerUser, verifyUser, loginUser}