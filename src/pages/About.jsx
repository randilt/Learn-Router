import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [pass, setPass] = useState("");
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const checkPw = () => {
    if (pass === "hello") {
      document.getElementById("pw-success").innerHTML =
        "<h4> Nice, You guessed it right! <br/> But the hidden page is still not created sorry :( </h4>";
    } else {
      setCount(count - 1);
      document.getElementById("pw-checker").innerHTML =
        "<h6> Wrong Password, Try Again <br/> <b>Hint: hello</b> </h6>";
    }
  };
  return (
    <div>
      <div className="container about">
        <div className="intro">
          <h2>About React Router Learning</h2>

          <p>
            Welcome to the React Router Learning website! This platform is
            dedicated to my journey in mastering React Router, a crucial library
            for building dynamic and navigable user interfaces in React
            applications.
          </p>

          <h3>My Learning Journey</h3>
          <p>
            As someone passionate about web development, I embarked on this
            journey to delve deeper into the world of React Router. The goal is
            to understand its concepts, explore its features, and apply this
            knowledge to create seamless, well-structured navigation within my
            React applications.
          </p>

          <h3>The Learning Process</h3>
          <p>
            Learning React Router involves hands-on practice and
            experimentation. The code examples provided on this website are a
            result of my exploration and experimentation with various React
            Router features. Each example is aimed at illustrating a specific
            concept or use case, making the learning process interactive and
            practical.
          </p>

          <h3>Join Me on this Learning Adventure</h3>
          <p>
            If you're also on a journey to master React Router or if you're just
            getting started with React, feel free to explore the examples,
            follow along with the tutorials, and engage in the provided
            exercises. Let's learn and grow together in the fascinating realm of
            React and React Router.
          </p>
          {count > 0 ? (
            <>
              <b>
                Enter the correct password to view the hidden page <br />
                Attempts Remaining: {count}
              </b>
              <br />
              <div className="check-password">
                <input
                  id="pass"
                  type="text"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <button className="button" onClick={checkPw}>
                  View Page
                </button>
              </div>
              <div id="pw-checker"></div>
              <div id="pw-success"></div>
            </>
          ) : (
            <h4>No more guesses, Refresh to retry.</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
