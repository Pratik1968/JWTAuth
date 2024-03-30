import { Request, Response } from "express";
import UserDB from "../../db/user.db"
import { UserAttributes } from "../../models/user.model";
import { compare, genSalt, hash } from "bcrypt"
import { sign } from "jsonwebtoken";
interface UserSignIn {
    EMAIL: string,
    PASSWORD: string,
}
export default class SignIn {

    public static async RequestHandler(req: Request, res: Response): Promise<void> {
        const user: UserSignIn = req.body;
        const status = await SignIn.CheckPassword(user)
        let response = ""
        switch (status) {
            case "200":
                response = "Success"
                break;
            case "404":
                response = "Email not found"
                break;
            case "401":
                response = "Password not match"
                break;
        }
       if(status !=="200") res.status(parseInt(status)).json(
            {
                message: response
            }
        )
        else res.status(parseInt(status)).json(
            {
                message: response,
                token: SignIn.createSessionToken(user)
            }
        )
    }
    private static async CheckPassword(user: UserSignIn): Promise<string> {
        const hashedPasswordGot = user.PASSWORD
        const hashedPasswordSaved = await SignIn.GetPassword(user)
        if (hashedPasswordSaved === "404") return "404"
        const response = await compare(hashedPasswordGot, hashedPasswordSaved)
        if (response === true) {
            return "200"
        }
        return "401"

    }



    private static async GetPassword(user: UserSignIn): Promise<string> {
        const hashedPasswordSaved = await UserDB.getPassword(user.EMAIL);
        if (hashedPasswordSaved !== "404") {
            return hashedPasswordSaved
        }
        return "404"

    }
    private static createSessionToken(user:UserSignIn){
        return  sign({EMAIL:user.EMAIL,PASSWORD:user.PASSWORD},process.env.ACCESS_TOKEN,{expiresIn:process.env.ACCESS_TOKEN_EXPIRE_TIME})
         }
}