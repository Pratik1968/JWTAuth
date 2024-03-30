import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
export default class AuthMiddleware {
    public static async  RequestHandler(req:Request,res:Response,next:NextFunction){
const authHeader = req.headers["authorization"]
const token = authHeader && authHeader.split(' ')[1]
if(token === null )return res.sendStatus(401)
 verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
    if(err) return res.status(401).send("Not Authorize")
next()
})



    }
}