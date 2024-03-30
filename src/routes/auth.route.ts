import { Express,Router } from "express"
import express = require("express")
import SignUp from "../controller/auth/signup.controller"
import SignIn from "../controller/auth/signin.controller"



const router : Router = express.Router()


router.route("/signup").post(SignUp.RequestHandler)
router.route("/signin").post(SignIn.RequestHandler)



export default router