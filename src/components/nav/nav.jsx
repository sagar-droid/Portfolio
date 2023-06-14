import React, { useState } from "react";
import "./nav.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineExperiment } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHomeAlt2 />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineExperiment />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contacts")}
        className={activeNav === "#contacts" ? "active" : ""}
      >
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
