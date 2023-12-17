import reactLogo from "../assets/images/react.png";
import routerLogo from "../assets/images/router.png";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <h1>React Router</h1>
        <div className="hero-images">
          <img src={reactLogo} alt="" />

          <img src={routerLogo} alt="" />
        </div>

        <p>
          <em>Teaching myself how to use React Router.</em>
        </p>
        <p>
          {" "}
          <p>
            Welcome to this project dedicated to exploring React Router—a
            valuable library for managing navigation in React applications. This
            endeavor is a personal learning experience aimed at gaining
            proficiency in React Router concepts and implementation.
          </p>
        </p>
        <br />
        <p>
          React Router is a collection of navigational components that compose
          declaratively with your application.
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
