import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashBoard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

function App() {
  // return <h1 className="text-3xl text-teal-700">Welcome to EMS</h1>;
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<p>hello</p>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admin-dashboard" element={<AdminDashBoard/>} />
      <Route path="/employee-dashboard" element={<EmployeeDashboard/>} />
    </Routes>
  </BrowserRouter>;
}

export default App;
