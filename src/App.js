import Dashbaord from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./componenets/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbaord />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
