import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={CV} className="btn" >Download CV</a>
        <a href="https://wepik.com/templates/resumes?q=resume#rs=home" className="btn btn-primary" rel="noreferrer" target="_blank" >Create Resume</a>
      </div>
    </div>
  );
};

export default CTA;
