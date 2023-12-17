import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <div className="logo">
          <h1>LearningRouter</h1>
        </div>
        <div className="links">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
            <li onClick={() => navigate("/login")}>Login</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
