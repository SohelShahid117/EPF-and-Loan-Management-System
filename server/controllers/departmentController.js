// import dept from "../models/dept";
import dept from "../models/dept.js"

const addDepartment = async (req,res) =>{
    // console.log("hi")

    try{

        console.log(req.body)
        const {deptName,description} = req.body;
        console.log(deptName)
        console.log(description)

        const newDept = new dept({
            deptName,
            description
        })
        await newDept.save();
        return res.status(200).json({success:true,department:newDept})

    }catch(err){
        console.log(err)
        return res.status(500).json({success:false,error:"server error in department"})
    }
}
// export default addDepartment;
export {addDepartment};