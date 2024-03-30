
import {Request,Response} from "express"
import { genSalt,hash } from "bcrypt"
import { UserAttributes } from "../../models/user.model"
import UserDB from "../../db/user.db"
import {sign} from "jsonwebtoken";
export default class SignUp {
    public static async RequestHandler(req: Request, res: Response): Promise<void> {
        let user:UserAttributes= req.body
        let encryptedPassword:string = await SignUp.hashPassword(user.PASSWORD)
        SignUp.setDefaultValues(user,encryptedPassword)
    const status = await UserDB.insert(user)
    if(status===200){

        res.status(status).json({
          
           "token": await SignUp.createSessionToken(user)
        })
    }else{
        res.status(status).send()
    }
    
    }

   
    
    
    private static async  hashPassword(Password:string):Promise<string>{
        const salt:string =await  genSalt(10)
        
        let encryptedPassword:string =await hash(Password,salt)
    
        return encryptedPassword
        
    }
    
    private static setDefaultValues(user:UserAttributes,encryptedPassword:string){
        
        user.NAME = ""
        user.PASSWORD = encryptedPassword
        user.HOSTEL=""
        console.log(user.PASSWORD)
        return (user)
    }
    
    private static createSessionToken(user:UserAttributes){
   return  sign({EMAIL:user.EMAIL,PASSWORD:user.PASSWORD},process.env.ACCESS_TOKEN,{expiresIn:process.env.ACCESS_TOKEN_EXPIRE_TIME})
    }

}