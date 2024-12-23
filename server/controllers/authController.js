import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import bcrypt  from 'bcrypt';
export const login = async (req,res) =>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email})
        console.log(user)
        if(!user){
            res.status(404).json({success:false,error:"user not found"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(404).json({success:false,error:"wrong password"})
        }

        const token = jwt.sign(
            {_id:user._id,role:user.role},
            // token,
            "jwtSecretKey333AAABBBCCCDDDeeeFFFggghhh123@@@###789",
            {expiresIn:"10d"}
        )

        res.status(200).json({success:true,token,user:{_id:user._id,role:user.role,name:user.name}})

    }catch(err){
        console.log(err)
        res.status(500).json({success:false,error:err.message})
    }
}
// export default  login;

export const verify = (req,res)=>{
    return res.status(200).json({success:true,user:req.User})

}
// export default verify;
// export default {login,verify};