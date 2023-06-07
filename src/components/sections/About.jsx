import React from "react";
import Tech from "../Tech";

const About = (props) => {
  return (
    <section id="about">
      <div>
        <h1>{props.title}</h1>
      </div>
      <div className="about-container">
        <div className="content">
          <p>{props.bio}</p>
          <p>{props.work}</p>
          <p>{props.experience}.</p>
          <p>{props.techTitle}</p>
          <Tech technologies={props.tech} />
        </div>
        <div className="grid-photo">
          <img
            src={props.image}
            alt={props.imageAlt}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
