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
              Handling the company’s website on Shopify using stacks such as
              Liquid along with HTML/CSS and JavaScript along with the use of
              their libraries.
            </li>
            <li>
              Cleaned code and made Live product pages for more than 55
              bestselling products, which has reduced the page load speed by 2
              seconds, by adding a custom class on the images of the products.
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
