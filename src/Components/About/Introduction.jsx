import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/m_profile.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Mine Ekici </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Nevsehir, Turkey
                </span>
                . I have completed my graduation in 2023
                from{" "}
                <span className="different">
                  Istanbul Technical University, Turkey (ITU)
                </span>
                . Then I entitled to participate in the restoration master program by{" "}
                <span className="different">ITU</span>
              </h4>
              <h4>Terms That can describe me apart from Architecture :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Drawer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Human Resources Specialist{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Restorator{" "}
              </h4>
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
