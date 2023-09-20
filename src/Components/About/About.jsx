import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Mine Ekici</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        Passionate and creative Architect with a strong background in architectural design and a dedication to preserving historical structures. Also, a Master Restoration Student with two years of intensive study in the art of architectural restoration. Proficient in both modern architectural design principles and traditional restoration techniques. Committed to blending innovation with heritage preservation. Experienced in working on a wide range of restoration projects, including iconic landmarks and historical sites. Eager to continue learning and contributing to the field of architectural conservation.
        </p>
        <div className="about__contact center">
          {/* <a
            href="https://github.com/Shreyasgkhakal100"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a> */}
          <a
            href="mailto:minekici92@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+901234567890"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/minekici/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/artandculture99"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1Ryeaj8mbkmn1UnuZyGgNaz7_NUa4EEAV/view?usp=drive_link"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
