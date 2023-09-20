import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"August 2023 - September 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Architectural Intern
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Argos | Yapı – Atölye
            </h4>
            <p data-aos="fade-right">
            Construction of a residential building in a rocky area in Uçhisar, in accordance
with Cappadocian architecture, including project analysis and site supervision. <br />
Project design, restitution and survey drawings in various scales for specific
plots in the Sandima project in Bodrum, hazard and material analysis, and
observation of restoration and construction works.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"February 2023 - June 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              TR Disaster Zone Temporary Shelter Project
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Together with Prof. Dr. Funda Yirmibeşoğlu, Istanbul Technical University
            </h4>
            <p data-aos="fade-right">
            Under the guidance of the Future Invest Global Project Development and
Consultancy Inc., as the central consultant within the ITU Housing Application
and Research Center, a project called "Happy Life Villages Project" was
carried out following a significant disaster that occurred on February 6, 2023.
Within the scope of the "DISASTER AREA EMERGENCY TEMPORARY HOUSING
PROJECT," living areas consisting of 50 modular containers were designed.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"2021 - 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Architecture
(% 100 English)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Istanbul Technical University
            </h4>
            <p data-aos="fade-right">
            Faculty of Architecture
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"2017 - 2021"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Urban and Regionnal Planning (% 100 English)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Istanbul Technical University
            </h4>
            <p data-aos="fade-right">
            Faculty of Architecture
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"2014 - 2015"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Exchange Student, Instituut Onza Liese Vrouw
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Van Vreudge High School
            </h4>
            <p data-aos="fade-right">
            Roeselare, Belgium
            </p>
          </VerticalTimelineElement>
        

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
