import React from "react";
import ecommerce from "../../assets/shoes.jpg";
import todo from "../../assets/todolist.png";
import blog from "../../assets/blogpost.png";
import "./portfolio.css";
const data = [
  {
    id: 1,
    image: todo,
    title: "Todo List",
    github: "https://github.com/sagar-droid/Todolist",
  },
  {
    id: 2,
    image: blog,
    title: "Blogpost",
    github: "https://github.com/sagar-droid/SinglePageApplication",
  },
  {
    id: 3,
    image: ecommerce,
    title: "Ecommerce",
    github: "https://github.comhttps://github.com/sagar-droid/ecommerce",
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
                <img className="item_image" src={image} alt={title} />
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
