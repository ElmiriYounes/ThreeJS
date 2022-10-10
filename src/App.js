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
        <Route path={window.location.hostname.substring(0,9) === "localhost" ? '/' : "/ThreeJS"} element={<Welcome/>} />
        <Route path={window.location.hostname.substring(0,9) === "localhost" ? '/shoe' : "/ThreeJS/shoe"} element={<ShoeWrap/>} />
        <Route path={window.location.hostname.substring(0,9) === "localhost" ? '/cube' : "/ThreeJS/cube"} element={<Cube/>} />
        <Route path={window.location.hostname.substring(0,9) === "localhost" ? '/skin' : "/ThreeJS/skin"} element={<SkinWrap/>} />
      </Routes>
    </Router>
  );
}

export default App;
