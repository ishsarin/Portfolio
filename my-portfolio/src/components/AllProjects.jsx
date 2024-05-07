import React, { useEffect } from "react";
import data from "../data/data";
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const AllProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleHomePage = () => {
    const path = "/";
    navigate(path);
  };

  return (
    <>
      <section className="projects" id="projects">
        <h4>ALL PROJECTS</h4>
        {data.map((data) => (
          <div className={data.id % 2 !== 0 ? "project" : "reverse_project"}>
            <img
              className={data.image === "" ? "no_img" : "project_img"}
              key={data.id}
              src={data.image}
              alt="Image Loading..."
            />
            <div className="project_content">
              <h5 key={data.id}>{data.title}</h5>

              <p key={data.id}>
                {data.content}
                <br />
                <span
                  className="projects_front-end"
                  key={data.id}
                  style={{ color: "black" }}
                >
                  Front-end:
                </span>{" "}
                {data.front}
                <br />
                <span key={data.id} style={{ color: "black" }}>
                  Back-end:
                </span>{" "}
                {data.back}
              </p>
              <a href={data.url} className="project_code" target="_blank">
                <span style={{ padding: "5px" }}>Code</span>
                <AiFillGithub size={28} />
              </a>
            </div>
          </div>
        ))}
        <button className="btn btn-warning" onClick={handleHomePage}>
          Back to HomePage
        </button>
      </section>
      <Footer />
    </>
  );
};

export default AllProjects;
