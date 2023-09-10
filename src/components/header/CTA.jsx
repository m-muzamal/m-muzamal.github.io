import React from "react";
import CV from "../../assets/cv.pdf";
// import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={CV} className="btn" >Download CV</a>
        {/* <Link to="cv" className="btn btn-primary" >Create Resume</Link> */}
        <a href="https://wepik.com/templates/resumes?q=resume#rs=home" className="btn btn-primary" rel="noreferrer" target="_blank" >Create Resume</a>
      </div>
    </div>
  );
};

export default CTA;
