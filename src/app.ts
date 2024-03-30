import { Express,Request,Response,NextFunction } from "express"
import express =require("express")
import router from "./routes/routes"
import DB from "./db/init"

const app:Express  = express()
const PORT = process.env.SERVER_PORT||3000
app.use(express.json())

app.use((req:Request,res:Response,next:NextFunction)=>{
    console.log("\x1b[1m",req.method,req.url)
    console.time()
    next()
    console.timeEnd()
})
app.use(router)







app.listen(PORT,()=>{
    
    DB.init()
    console.log(`server started :${PORT}`)})