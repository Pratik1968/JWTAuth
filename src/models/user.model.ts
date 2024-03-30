import { Sequelize,DataType,Model, DataTypes, Optional } from "sequelize"
import { POSTGRES_URL } from "../util/global";
const sequelize:Sequelize = new Sequelize(POSTGRES_URL)
export interface UserAttributes{
    NAME:string,

    EMAIL:string,
    PASSWORD:string,
    HOSTEL:string
  
}

export default class UserModel extends Model<UserAttributes,UserAttributes>{
   public NAME:string;
   public EMAIL:string;
   public PASSWORD:string;
    public HOSTEL:string;


}
 UserModel.init(
    {
        NAME: {
            type: DataTypes.STRING(128),
        },

        EMAIL: {
            type: DataTypes.STRING(128),
            primaryKey: true,
            allowNull: false,
        },
        PASSWORD: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        HOSTEL: {
            type: DataTypes.STRING(128),
            allowNull: false,
        }
    },
{
    tableName:'users',
    sequelize
}
)
// export class UserHandler {
//     public static async insert(userData:userInfo):Promise<any>{
//  const response =  await UserModel.create(userData)

// return response
//     }
// }










