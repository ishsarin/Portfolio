import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";
const AboutMe = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <section className={!dark ? "aboutme" : "dark-aboutme"} id="aboutme">
      <div className="aboutme-wrapper">
        <div className="aboutme-img"></div>
        <div className={!dark ? "aboutme-content" : "dark-aboutme-content"}>
          <h4>ABOUT ME</h4>
          <div className="">
            <p className="font-thin">
              With expertise in responsive design, robust backend development,
              and interactive user experiences, I bring your digital dreams to
              life.
            </p>
            <p>
              I try to incorporate the latest technologies and best practices to
              deliver high-quality solutions on time with clean and maintainable
              code.
            </p>
            <p>
              I am a lifelong learner, always eager to explore new technologies
              and stay updated with industry trends. I thrive in collaborative
              environments, where I can contribute my skills and learn from
              others to create innovative solutions.
            </p>
          </div>
          <div className="resume">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1rmHYi2VLMoSq0yySokxYr6z1CHq_MqmL/view?usp=sharing"
            >
              <button className="btn bg-white">Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="web-developer_logo"></div>
    </section>
  );
};

export default AboutMe;
