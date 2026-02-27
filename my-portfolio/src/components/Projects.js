import React from "react";
import data from "../data/data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AiFillGithub } from "react-icons/ai";
const Projects = () => {
  const navigate = useNavigate();
  const handleMoreProjects = () => {
    const path = "/allprojects";
    navigate(path);
  };

  return (
    <section className="projects" id="projects">
      <h4>PROJECTS</h4>
      <h5 className="projects_info">
        Each Project is a unique piece of development. ⚒️
      </h5>

      {data
        .filter((data) => data.id <= 3)
        .map((data) => (
          <div className={data.id % 2 !== 0 ? "project" : "reverse_project"}>
            <a href={data.app} target="_blank">
              <img
                className={data.image === "" ? "no_img" : "project_img"}
                key={data.id}
                src={data.image}
                alt="Image Loading..."
              />
            </a>
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
      <button className="btn btn-info" onClick={handleMoreProjects}>
        More Projects
      </button>
    </section>
  );
};

export default Projects;
