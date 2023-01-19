import React from "react";
import "./intro.css";
import Typewriter from "typewriter-effect";
const Intro = () => {
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span>I'm Kunal Sikka</span>
          <span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full Stack Developer")
                  .start()
                  .deleteAll()
                  .typeString("Software Developer")
                  .start();
              }}
            />
          </span>
          <span>
            A budding Full Stack and Java Developer with relevant experience
            that welcomes opportunities involving enhancement of knowledge and
            skills. Passionate to explore challenging technological roles that
            promise an overall professional and personal development.
          </span>
        </div>
      </div>
      <div className="i-right">
        <div className="i-logo">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
