// -----BOILER PLATE------

// import express from "express"

// const router = express.Router();

// export default router

import express from "express"
import { registerUser } from "../controller/user.controller.js";

const router = express.Router();

router.get('/register', registerUser)

export default router