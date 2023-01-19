import React from "react";
import "./skills.css";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
  SiJava,
  SiPython,
} from "react-icons/si";
const Skills = () => {
  return (
    <div className="wrapper">
      <span className="headi">SKILLS & RELEVANT WORK EXPERIENCE</span>
      <div className="wrap">
        <div className="center">
          <div className="homeCubeSkills">
            <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
              <img
                src="https://colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png"
                alt="logo"
                className="img"
              />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
              <img
                src="https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
                alt="logo"
                className="img"
              />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
              <img
                src="https://miro.medium.com/max/6668/1*XP-mZOrIqX7OsFInN2ngRQ.png"
                alt="logo"
                className="img"
              />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
              <img
                src="https://cdn.slidesharecdn.com/ss_thumbnails/mongodb-131104130625-phpapp01-150913153331-lva1-app6892-thumbnail-4.jpg?cb=1442158757"
                alt="logo"
                className="img"
              />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
              <img
                src="http://ictacademy.com.ng/wp-content/uploads/2017/10/14570828119302_illu-cours_html5-css3.png"
                alt="logo"
                className="img"
              />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
              <img
                src="https://www.thecrazyprogrammer.com/wp-content/uploads/2017/11/CSS3.jpg"
                alt="logo"
                className="img"
              />
            </div>
          </div>
        </div>
        <div className="s-left">
          <div className="homeskillsBox" id="homeskillsBox">
            <SiJava />
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiMongodb />
            <SiExpress />
            <SiReact />
            <SiNodedotjs />
            <SiPython />
          </div>
          <div className="skills"></div>
        </div>
        <div className="s-right">
          <div className="experience">
            <span>
              Worked as a Full Stack Developer in DIAG Lab Memorial University
            </span>
            <span>
              Improved the website, originally made using Ruby on Rails,
            </span>
            <span>using React for the frontend and Django for the backend</span>
            <span>
              Worked as a Software Developer at CHMR-FM Memorial University
            </span>
            <span>
              Worked solely in developing an efficient playlist management
              software for the
            </span>
            <span>
              {" "}
              student run radio station with the aid of Java and MySQL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
