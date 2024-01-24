import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Upwork from "../../img/Upwork.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>neeraj13221822@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/web10crown/"><Insta color="white" size={"3rem"} /></a>
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
          <a href="https://www.upwork.com/freelancers/~01e431aaf8926d87e0" className="upwork"><img src={Upwork}alt="" />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
