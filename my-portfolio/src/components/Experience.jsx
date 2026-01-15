import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
const Experience = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <section
      className={!dark ? "experience" : "dark-App-experience"}
      id="experience"
    >
      <h4>EXPERIENCE</h4>
      <div className="boat">
        <h5 className="profile">
          Advanced Application Engineering Analyst,{" "}
          <span className="employee">Accenture</span>
          <span className="timeline">11/2023 - Present</span>
        </h5>

        <div className="boat-work">
          <ul>
            <li>
              Involved in developing the DrBot service from scratch at
              Accenture, responsible for automating bot updates, monitoring
              health checks, and synchronizing deployment statuses across
              multiple client environments through centralized orchestration.
            </li>
            <li>
              Designed scalable backend logic to handle thousands of concurrent
              bot update requests, improving operational efficiency and reducing
              manual intervention by 80%.
            </li>
            <li>
              Developed and consumed RESTful APIs built with Node.js and
              Express.js, ensuring smooth frontend backend communication,
              optimized data transfer, and reduced latency by 35%.
            </li>
            <li>
              Implemented pagination along with lazy-loading and dynamic data
              fetching on client websites, optimizing API throughput, and
              enhancing user experience across all major browsers and devices.
            </li>
            <li>
              Engineered and integrated secure authentication mechanisms to
              strengthen platform security and reduce login-related support
              queries.
            </li>
            <li>
              Delivered end-to-end security monitoring and incident response for
              8+ global clients across multiple domains, leveraging tools like
              Splunk, Sentinel, Defender, and Proofpoint to reduce incident
              resolution time by 35%.
            </li>
          </ul>
        </div>
      </div>

      <div className="boat">
        <h5 className="profile">
          Web Developer Intern,{" "}
          <span className="employee">
            boAt Lifestyle, Imagine Marketing India Pvt. Ltd
          </span>
          <span className="timeline">06/2022 - 12/2022</span>
        </h5>

        <div className="boat-work">
          <ul>
            <li>
              Engineered a seamless, responsive user experience on Shopify using
              Liquid, HTML/CSS, and JavaScript alongside the Bootstrap library
              which improved mobile conversion rates by 40% and reduced bounce
              rate by 25%.
            </li>
            <li>
              Collaborated with the design and SEO teams to ensure
              accessibility, responsiveness, and performance across browsers and
              devices, directly enhancing overall user engagement and revenue.
            </li>
            <li>
              Contributed to daily deployments, version control (Git), and
              Shopify theme customization, gaining hands-on experience in Agile
              development workflows.
            </li>
            <li>
              Reduced page load speed by 2 seconds, by adding a custom class on
              the images of the products along with cleaning code and making
              product pages for more than 55 bestselling products
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
