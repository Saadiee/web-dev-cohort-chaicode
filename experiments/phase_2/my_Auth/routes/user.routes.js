// -----BOILER PLATE------

// import express from "express"

// const router = express.Router();

// export default router

import express from "express"
import { loginUser, registerUser, verifyUser, getMe, logoutUser, forgotPassword, resetPassword } from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/register', registerUser)
router.get('/verify/:token', verifyUser)
router.post('/login', loginUser)
router.get('/profile',isLoggedIn, getMe)
router.get('/logout',isLoggedIn, logoutUser)
router.post('/forgotpwd', forgotPassword)
router.post('/resetpwd/:token', resetPassword)

export default router;