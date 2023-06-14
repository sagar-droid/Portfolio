import React from "react";
import "./experience.css";

function experience() {
  return (
    <section id="experience">
      <h5 style={{ padding: "15px" }}>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article>
              <div>
                <h4>JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article>
              <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article>
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article>
              <div>
                {" "}
                <h4>JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default experience;
