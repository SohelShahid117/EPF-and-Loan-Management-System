import mongoose from "mongoose";
const deptSchema = new mongoose.Schema({
    deptName : {type:String,required:true},
    description : {type:String},
    createdAt : {type:Date,default:Date.now},
    updatedAt : {type:Date,default:Date.now}
})

const dept = mongoose.model("dept",deptSchema)
export default dept;