import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws, FaFigma } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiAdobe,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAutodesk,
  SiSketchup,
  SiCoderwall,
  SiAutohotkey,
  SiArchlinux,
  SiRhinoceros,
  SiMicrosoftexcel,
  SiBlender,
  SiMaas
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";


export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiAdobephotoshop />
            <h5>Adobe Photoshop</h5>
          </div>
          <div>
            <SiAdobeillustrator />
            <h5>Adobe Illustrator</h5>
          </div>
          <div>
            <SiAutohotkey />
            <h5>Lumion 3D</h5>
          </div>
          <div>
            <SiAutodesk />
            <h5>AutoCAD</h5>
          </div>
          <div>
            <SiSketchup />
            <h5>SketchUp Pro</h5>
          </div>
          <div>
            <SiCoderwall />
            <h5>CorelDRAW</h5>
          </div>

          <div>
            <SiArchlinux />
            <h5>ArcGIS Pro</h5>
          </div>

          <div>
            <SiRhinoceros />
            <h5>Rhinoceros</h5>
          </div>
          <div>
            <SiMicrosoftexcel />
            <h5>3D MS Excel</h5>
          </div>
          <div>
            <SiBlender />
            <h5>Blender</h5>
          </div>
          <div>
            <FaFigma />
            <h5>Figma</h5>
          </div>
          <div>
            <SiMaas />
            <h5>3DS Max</h5>
          </div>
        </div>
      </div>
    </>
  );
};
