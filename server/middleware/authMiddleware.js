import jwt from "jsonwebtoken"
import user from "../models/user.js"
const verifyUser=async(req,res,next)=>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        console.log(token)

        if(!token){
            return res.status(404).json({success:false,error:"token not provided"})
        }

        // const decoded = jwt.verify(token,process.env.JWT_key)
        const decoded =jwt.verify(token,"jwtSecretKey333AAABBBCCCDDDeeeFFFggghhh123@@@###789")
        console.log(decoded);

        if(!decoded){
            return res.status(404).json({success:false,error:"token not valid"})
        }

        const userNow = await user.findById({_id:decoded._id}).select('-password')
        console.log(userNow)
        if(!userNow){
            return res.status(404).json({success:false,error:"user not found"})
        }
        console.log(req)
        req.user = userNow
        // req.user = user;
        next()

    }catch(err){
        console.log(err)
        return res.status(500).json({success:false,error:"server error"})
    }
}

export default verifyUser;