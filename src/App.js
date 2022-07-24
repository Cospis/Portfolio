import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Abt";
import Portfolio from "./components/Port";
import Navbars from "./components/Navbar";
import Experience from "./components/Exp";
import Services from "./components/Ser";
function App() {
  return (
    <div>
      <Navbars />
      <div className="page-content">
        <Routes>
          <Route Exact path="/" element={<Home />} />
          <Route Exact path="/home" element={<Home />} />
          <Route Exact path="/abt" element={<About />} />
          <Route Exact path="/port" element={<Portfolio />} />
          <Route Exact path="/ser" element={<Services />} />
          <Route Exact path="/exp" element={<Experience />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
