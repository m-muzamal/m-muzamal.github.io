import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "This is 3D box design...",
    demo: "https://www.instagram.com/p/CXLmyUXsTxs/",
  },
  {
    id: 2,
    image: IMG2,
    title: "AM 3D design...",
    demo: "https://www.instagram.com/p/CMCMjA3BmZy/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Buisness card design...",
    demo: "https://www.instagram.com/p/CNE5HMgHZ9n/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Dog world logo design...",
    demo: "https://www.instagram.com/p/CM3jK7An928/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Shooting gun lgo design...",
    demo: "https://www.instagram.com/p/CMjBnwZHXPw/",
  },
  {
    id: 6,
    image: IMG6,
    title: "TS logo design...",
    demo: "https://www.instagram.com/p/CMeiqdCH0TQ/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfoilo__item-cta">
                <a
                  href={demo}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
