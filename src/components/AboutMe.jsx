import myPic from "../assets/images/randil.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-img">
        <img src={myPic} alt="" />
      </div>
    </div>
  );
};

export default AboutMe;
