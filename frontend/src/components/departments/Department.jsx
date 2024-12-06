import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component"
import { columns } from "../../utils/DepartmentHelper";
import axios from "axios";
// import { columns } from './../../utils/DepartmentHelper';

const Department = () => {
  useEffect(()=>{
    const fetchDepartments = async () =>{
      try{
        const response = await axios.get("http://localhost:3000/api/department",{
          headers:{
            "Authorization":`bearer ${localStorage.getItem("token")}`
          }
        })
        console.log(response)

      }catch(err){
        console.log(err)
      }

    }

  },[])
  return (
    <div>
      <div className="text-center my-2">
        <h2 className="text-2xl">Manage Departments</h2>
      </div>
      <div className="flex justify-between mx-5">
        <input type="text" placeholder="search by department name" className="px-2 py-2 w-64 text-center" />
        <Link to="/admin-dashboard/add-department" className="px-4 py-2 bg-teal-600 text-white">Add New Department</Link>
      </div>
      <div>
        <DataTable columns={columns}/>
      </div>
    </div>
  );
};

export default Department;
