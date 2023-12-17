import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Navbar />
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
