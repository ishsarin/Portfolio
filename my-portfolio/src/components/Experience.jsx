import React from "react";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h4>EXPERIENCE</h4>
      <div className="boat">
        <h5 className="profile">
        
          Web Developer Intern,{" "}
          <span className="employee">
            boAt Lifestyle, Imagine Marketing India Pvt. Ltd
          </span>
        
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
            </li>
          </ul>
        </div>
      </div>
      <div className="letter-of-completion">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1Prqu74hASSNJPcsolPaRvjScwBdTMw4x/view?usp=share_link"
        >
          <button class="btn btn-success">Letter of Completion</button>
        </a>
      </div>
    </section>
  );
};

export default Experience;
