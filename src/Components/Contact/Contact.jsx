import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/minekici/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            {/* <a
              href="https://github.com/Shreyasgkhakal100/"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a> */}
            <a
              href="mailto:minekici92@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+901234567890" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>minekici92@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+90 123 456 78 90</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
