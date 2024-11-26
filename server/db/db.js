import mongoose from "mongoose"
// require('dotenv').config()
const connectToDatabase = async()=>{
    try{
        // await mongoose.connect(process.env.MongoDB_URL)
        await mongoose.connect("mongodb://localhost:27017/empandloanms")

    }catch(err){
        console.log(err)
    }
} 

export default connectToDatabase;