import user from "./models/user.js"
import bcrypt from "bcrypt"
import connectToDatabase from "./db/db.js"

const userRegister=async()=>{
    connectToDatabase()
    try{
        const hashPassword = await bcrypt.hash("admin",10)
        const newUser = new user({
            name:"admin",
            email:"admin@gmail.com",
            password:hashPassword,
            role:"admin"
        })
        await newUser.save()

    }catch(err){
        console.log(err)
    }
}
userRegister()