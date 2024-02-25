import React, {useContext, useEffect, useMemo} from "react"

import "./experience.css"

import TimeLineCop from "../TimeLine/TimeLineCop"
import {SectionContext} from "../../context/SectionScrollContext"
export default function Experience({experienceRef}) {
  const {headerRef} = useContext(SectionContext)
  const details = [
    {
      label: "work",
      date: "August 2022 - Present",
      institution: "Nielsen Media",
      title: "Software Developer",
      location: "Halifax, Nova Scotia",
      description:
        "Full Stack Developer, ReactJs, TypeScript, Html , Css , Git, Golang , CassandraDB",
    },
    {
      label: "school",
      date: "March 2020 - April 2022",
      institution: "CDI College",
      title: "Advanced Deploma in Computer Science",
      location: "Montreal, Quebec",
      description:
        "A comprehensive diploma program integrating practical networking and programming concepts",
    },
    {
      label: "work",
      date: "March 2019 - March 2020",
      institution: "Feosys Technologies",
      title: "Full-Stack Developer",
      location: "Surat, Inida",
      description:
        "Full Stack Developer, ReactJs, TypeScript, Html , Css , Git, Golang , CassandraDB",
    },
  ]

  const addPosition = useMemo(() => {
    details.forEach((e, i) => {
      if (i % 2 != 0) {
        details[i].position = "right"
      }
    })
  }, [details])
  // console.log(headerRef.current.offsetHeight)
  return (
    <div
      className="experience-container"
      ref={experienceRef}
      style={{marginTop: headerRef?.current?.offsetHeight}}
    >
      {/* <div className="timelineWrapper"> */}
      {details &&
        details.length > 0 &&
        details.map((detail) => <TimeLineCop details={{...detail}} />)}
      {/* </div> */}
      {/* <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
          contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
          date="2011 - present"
          iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
          icon={<WorkHistoryIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement> */}
      {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
          icon={<WorkHistoryIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
          icon={<WorkHistoryIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{background: "rgb(33, 150, 243)", color: "#fff"}}
          icon={<WorkHistoryIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{background: "rgb(233, 30, 99)", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{background: "rgb(233, 30, 99)", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{background: "rgb(233, 30, 99)", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{background: "rgb(16, 204, 82)", color: "#fff"}}
          // icon={<StarIcon />}
        /> */}
      {/* </VerticalTimeline>  */}
    </div>
  )
}
