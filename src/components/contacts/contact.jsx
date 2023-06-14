import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandMessenger } from "react-icons/tb";

function contact() {
  return (
    <section id="contact">
      <h5 style={{ padding: "15px" }}>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>Sagar000adhikari@gmail.com</h5>
            <a href="mailTo:Sagar000adhikari@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineInstagram className="contact_option_icon" />
            <h4>Instagram</h4>
            <h5>@the_lost._.nemo</h5>
            <a
              href="https://www.instagram.com/the_lost._.nemo/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <TbBrandMessenger className="contact_option_icon" />
            <h4></h4>
            <h5>Sagar Adhikari</h5>
            <a href="https://m.me/sagar.adhikari.142240" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Message" required />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default contact;
