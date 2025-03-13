// -----BOILER PLATE------

// import express from "express"

// const router = express.Router();

// export default router

import express from "express"
import { registerUser, verifyUser } from "../controller/user.controller.js";

const router = express.Router();

router.post('/register', registerUser)
router.get('/verify/:token', verifyUser)

export default router;