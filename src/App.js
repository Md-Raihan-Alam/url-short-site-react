import Dashbaord from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbaord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
