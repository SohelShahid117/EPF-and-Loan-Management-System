import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import AdminDashBoard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AdminDashBoard from "./pages/AdminDashBoard";
import PrivateRoute from "./utils/PrivateRoute";
import RoleBasedRoute from "./utils/RoleBasedRoute";
import AdminSummary from "./components/dashboard/AdminSummary";
import Department from "./components/departments/Department";

function App() {
  // return <h1 className="text-3xl text-teal-700">Welcome to EMS</h1>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>hello</p>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin-dashboard"
          element={
          // <AdminDashBoard />
            <PrivateRoute>
              <RoleBasedRoute requiredRole={["admin"]}>
                <AdminDashBoard />
              </RoleBasedRoute>
            </PrivateRoute>
          }
        >
          {/* <Route index element={<AdminSummary></AdminSummary>}/> */}
          <Route path="/admin-dashboard" element={<AdminSummary></AdminSummary>}/>
          <Route path="/admin-dashboard/departments" element={<Department></Department>}>

          </Route>
        </Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
