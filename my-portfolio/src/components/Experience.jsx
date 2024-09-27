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
              Working as Security Information and Event Management (SIEM) Cyber
              Security Analyst handling overseas clients.
            </li>
            <li>
              Investigating security alerts using Splunk, Microsoft Defender,
              and Proofpoint, detecting and mitigating threats to safeguard
              organizational assets; reduced response time by 25% to ensure
              timely mitigation.
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
              rate by 25%
            </li>
            <li>
              Reduced page load speed by 2 seconds, by adding a custom class on
              the images of the products along with cleaning code and making
              product pages for more than 55 bestselling products.
            </li>
            <li>
              Revamping the DEFY website for Defy (part of Imagine Marketing) on
              Shopify for their Ecommerce sales, which is currently live.
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1Prqu74hASSNJPcsolPaRvjScwBdTMw4x/view?usp=share_link"
              >
                <button class="btn btn-primary">Letter of Completion</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
