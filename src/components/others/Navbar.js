import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../stylesheets/Navbar.css";

const Navbar = () => {


  useEffect(() => {
    const menu = document.querySelector(".menu");
    const openMenuBtn = document.querySelector(".open-menu-btn");
    const closeMenuBtn = document.querySelector(".close-menu-btn");

    const handleClick = () => {
      menu.classList.toggle("open");
      menu.style.transition = "transform 0.5s ease";
    };

    [openMenuBtn, closeMenuBtn].forEach((btn) => {
      btn.addEventListener("click", handleClick);
    });

    menu.addEventListener("transitionend", function () {
      this.removeAttribute("style");
    });

    menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        this.closest(".dropdown").classList.toggle("active");
      });
    });

    return () => {
      [openMenuBtn, closeMenuBtn].forEach((btn) => {
        btn.removeEventListener("click", handleClick);
      });
      menu.removeEventListener("transitionend", handleClick);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="nav-container">
          <NavLink to="/" className="logo">
       <img src="./images/AlumniLogo.png" alt="ALUMNI" width={70} />
          </NavLink>

          <nav className="menu">
            <div className="head">
              <button type="button" className="close-menu-btn"></button>
            </div>

            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/project">Projects</NavLink>
              </li>
            
              <li>
                <NavLink to="/resume">Resume</NavLink>
              </li>
              
              <li>
                <NavLink to="/certificate">Certificates</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header-right">
            {/* Register Button For Different Devices */}
            
            <NavLink className="profile" to="/profile"><i class="fa-sharp fa-solid fa-user" />
              
            </NavLink>
            

            {/* Three Line Button */}
            <button type="button" className="open-menu-btn">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
