import React from "react";
import "./experiance.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>
      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Web Development</h3>
          <div className="experiance__content">
            <article className="experiance__detail">
              <BsPatchCheckFill className="experiance__detail-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__detail">
              <BsPatchCheckFill className="experiance__detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__detail">
              <BsPatchCheckFill className="experiance__detail-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediat</small>
              </div>
            </article>
            <article className="experiance__detail">
              <BsPatchCheckFill className="experiance__detail-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__detail">
              <BsPatchCheckFill className="experiance__detail-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experiance__detail">
              <BsPatchCheckFill className="experiance__detail-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediat</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experiance__backend">
          <h3>Graphic Designing</h3>
          <div className="experiance__content">
            <article className="experiance__detail">
              <BsPatchCheckFill className="experiance__detail-icon" />
              <div>
                <h4>Photo Editing</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__detail">
              <BsPatchCheckFill className="experiance__detail-icon" />
              <div>
                <h4>Veido Editing</h4>
                <small className="text-light">Intermediat</small>
              </div>
            </article>
            <article className="experiance__detail">
              <BsPatchCheckFill className="experiance__detail-icon" />
              <div>
                <h4>Vector Design</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__detail">
              <BsPatchCheckFill className="experiance__detail-icon" />
              <div>
                <h4>Web Development</h4>
                <small className="text-light">Intermediat</small>
              </div>
            </article>
            <article className="experiance__detail">
              <BsPatchCheckFill className="experiance__detail-icon" />
              <div>
                <h4>UI/UX Design</h4>
                <small className="text-light">Intermediat</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
