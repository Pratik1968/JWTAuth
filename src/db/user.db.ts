import { Sequelize,SequelizeScopeError,UniqueConstraintError } from "sequelize";
import UserModel, { UserAttributes } from "../models/user.model";
import ErrorCode from "../util/Error";
import { Status } from "../util/Status";

export default class UserDB{
    public static async insert(payload:UserAttributes):Promise<number>{
try{

    const user =await UserModel.create(payload)
    return 200
}catch(error){
    if(error instanceof UniqueConstraintError){
        return ErrorCode.AlreadyHaveAccount
    }

}
    }
    public static async getPassword(EMAIL:string):Promise<string>{
   const data =  await UserModel.findOne({
    attributes:["PASSWORD"],        
    where:{
                EMAIL:EMAIL
            }

        })
        if(data===null){
return "404"
        }

            return  data.PASSWORD
   
    }
    public static async setName(NAME:string,EMAIL:string):Promise<Status>{
        const data:[AffectedRow:number] = await UserModel.update({NAME:NAME},{
            where:{
                EMAIL:EMAIL
            }
        })
        if(data[0]===0){
        return {
            message:"Email not found",
            status:404}
        }
        return {
            message:"Success",
            status:200
        }
    }
    public static async setHostel(HOSTEL:string,EMAIL:string):Promise<Status>{
        const data:[affectedRow:number] = await UserModel.update({HOSTEL:HOSTEL},{
            where:{
                EMAIL:EMAIL
            }
        })
        if(data[0]===0){
        return {
            message:"Email not found",
            status:404
        }
        }
        return {
            message:"Success",
            status:200
        }
    } 
}