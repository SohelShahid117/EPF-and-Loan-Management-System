import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashBoard from "./pages/AdminDashBoard";

function App() {
  // return <h1 className="text-3xl text-teal-700">Welcome to EMS</h1>;
  return <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Navigate to="/admin-dashboard" />} /> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/admin-dashboard" element={<AdminDashBoard/>} />
    </Routes>
  </BrowserRouter>;
}

export default App;
