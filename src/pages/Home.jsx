import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="container">
        <div className="intro">
          <h1>This is the Home page</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
