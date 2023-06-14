import React from "react";
import Btns from "./btns";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import Me from "../../assets/me.jpg";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sagar Adhikari</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <div class="circle-container">
          <img src={Me} alt="Your Image" />
        </div>
        <Btns />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
}

export default Header;
