import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  const [department,setDepartment]=useState({
    deptName : "",
    description : "",
  })
  const navigate = useNavigate();

  const handleOnChange = (e) =>{
    // console.log("hi")
    const {name,value} = e.target;
    console.log(name)
    console.log(value)
    setDepartment({...department,[name]:value})
    console.log(department)
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log("hello")
    try{
      const response = await axios.post("http://localhost:3000/api/department/add",department,{
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
      })
      console.log(response)
      if(response.data.success){
        navigate("/admin-dashboard/departments")
      }
    }catch(err){
      console.log(err)
      if(err.response && !err.response.data.success){
        alert(err.response.data.error)
      }
    }
  }
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-center text-2xl font-bold mb-6">Add Department</h2>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="deptName" className="text-md font-medium text-gray-700">Department Name : </label>
            <input
            type="text"
            name="deptName"
            placeholder="Enter Department Name"
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            // onChange={handleOnChange=()=>{
            //   console.log("hi")
            // }}
            onChange={handleOnChange}
            />
          </div>
          <div className="my-4">
            <label htmlFor="description" className="text-md font-medium text-gray-700">Description : </label>
            {/* <input type="text" placeholder="Enter Department Name" /> */}
            <textarea name="description"
            id=""
            placeholder="description"
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            onChange={handleOnChange}
            ></textarea>
          </div>
          <button className="text-center text-2xl bg-teal-600 w-full px-2 py-2 rounded text-white mt-4">Add Department</button>
        </form>
      </div>
     
    </div>
  );
};

export default AddDepartment;
