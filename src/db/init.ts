import UserModel from "../models/user.model";
const   isDev= process.env.NODE_ENV === "development"||true
class DB{

   static init():void{
        UserModel.sync({alter:isDev})
    }
}
export default DB;