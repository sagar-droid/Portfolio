import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import "./footer.css";

function footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Sagar Adhikari
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <AiOutlineInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Sagar Adhiakri, All rights reserved</small>
      </div>
    </footer>
  );
}

export default footer;
