import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
export const MobileNavBar = () => {
  const [onScroll, setOnScroll] = useState(false);

  const { dark } = useContext(ThemeContext);
  const { setDark } = useContext(ThemeContext);

  const mobileScroll = () => {
    if (window.scrollY > 30) {
      console.log(">20");
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", mobileScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", mobileScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="mobile-nav">
        <div>
          {/* <ul className="mobile-nav-list">
          {/* <li>
            <a
              className="theme"
              onClick={() => {
                setDark(!dark);
              }}
            >
              <li>
                {!dark ? <MdDarkMode size={15} /> : <CiLight size={15} />}
              </li>
            </a>
          </li> */}
          {/* <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutme">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li> */}
          {/* </ul>  */}
          <nav
            class={
              dark
                ? "navbar navbar-light bg-light"
                : "navbar navbar-dark bg-dark"
            }
          >
            <div class="container-fluid">
              <div style={{ color: dark ? "black" : "white" }}>Sarin.dev</div>
              <div>
                {" "}
                <a
                  className="theme"
                  onClick={() => {
                    setDark(!dark);
                  }}
                >
                  {!dark ? (
                    <MdDarkMode size={25} color="white" />
                  ) : (
                    <CiLight size={25} color="black" />
                  )}
                </a>
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
          <div
            class="collapse"
            id="navbarToggleExternalContent"
            data-bs-theme="dark"
          >
            <div class={"bg-dark p-4"}>
              {/* <h5 class="text-body-emphasis h4">Collapsed content</h5> */}
              <ul className="mobile-nav-list">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#aboutme">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        onScroll={mobileScroll}
        className="scroll-top-btn"
        style={{ display: onScroll ? "block" : "none" }}
        onClick={scrollToTop}
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
