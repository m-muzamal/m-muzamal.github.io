import React from "react";
import "./services.css";
import { HiOutlineCheck } from "react-icons/hi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Awesome and unique user interfaces.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Layered for easy and clean for coding system.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Responsive Animation slider.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>User-friendly and attractive layout.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Revisions to the provided design are possible.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Delivery of all assets and are ready to be released.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>100% Customer Satisfaction Guaranteed.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Graphic Designing</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Graphics for website | social media | Print Design, etc.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Logo Design.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Flyers and Brouchures Design.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Business Cards Design.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Mockups Design.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Poster Design.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Invition card Design.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Postcard Design.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Social media post Design.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>100% Customer Satisfaction Guaranteed.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Responsive design for PC, Mobile, Tablet.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Clean code and coustom fonts and icons.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Convert any design to React JS.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Client-side secure Authentication with Firebase and JWT.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>API, Database integration.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Payment gateway integration </p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>Advanced NFT Web Application.</p>
            </li>
            <li>
              <HiOutlineCheck className="service__list-icon" />
              <p>100% Customer Satisfaction Guaranteed.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;
