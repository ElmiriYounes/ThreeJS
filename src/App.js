import Navbar from "./components/navbar/Navbar";
import Cube from "./pages/cube/Cube";
import ShoeWrap from "./pages/shoe/ShoeWrap";
import SkinWrap from "./pages/skin/SkinWrap";
import Welcome from "./pages/welcome/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/threejs" element={<Welcome/>} />
        <Route path="/threejs/shoe" element={<ShoeWrap/>} />
        <Route path="/threejs/cube" element={<Cube/>} />
        <Route path="/threejs/skin" element={<SkinWrap/>} />
      </Routes>
    </Router>
  );
}

export default App;
