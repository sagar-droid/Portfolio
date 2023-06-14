import React from "react";
import Img from "../../assets/shoes.jpg";
import "./portfolio.css";
const data = [
  {
    id: 1,
    image: Img,
    title: "Project image",
    github: "https://github.com",
  },
  {
    id: 2,
    image: Img,
    title: "Project image",
    github: "https://github.com",
  },
  {
    id: 3,
    image: Img,
    title: "Project image",
    github: "https://github.com",
  },
];

function portfolio() {
  return (
    <section id="portfolio">
      <h5 style={{ padding: "15px" }}>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href={github} className="btn" target="_blank">
                Github
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default portfolio;
