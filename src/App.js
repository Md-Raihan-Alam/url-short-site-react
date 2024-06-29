import Dashbaord from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./componenets/Register";
import Login from "./componenets/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbaord />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
