import {Router } from "express";
import express = require("express")

import AuthRouter from "./auth.route";
import AuthMiddleware from "../middleware/auth.middleware";
const router:Router = express.Router()
router.use("/api/auth",AuthRouter)
router.use("/api/*",AuthMiddleware.RequestHandler)
router.get("/api/test",(req:express.Request,res:express.Response)=>{
 return   res.status(200).send("Success")
})


export default router;