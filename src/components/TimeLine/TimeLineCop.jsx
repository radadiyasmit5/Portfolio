import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import WorkHistoryIcon from "@mui/icons-material/WorkHistory"
import SchoolIcon from "@mui/icons-material/School"
import {Title} from "@mui/icons-material"
const TimeLineCop = ({details}) => {
  let {label, date, title, location, description, position, institution} =
    details
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{background: "rgb(57 66 73)", color: "#fff"}}
        contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
        date={<span className="text-white text-2xl">{date}</span>}
        iconStyle={{background: "rgb(113 112 175)", color: "#fff"}}
        icon={label === "work" ? <WorkHistoryIcon /> : <SchoolIcon />}
        position={position}
      >
        <div className="mb-5">
          <h1 className="text-3xl mb-5 kanitfont inline">{title}</h1> -{" "}
          <h3 className="inline text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{institution}</h3>
        </div>
        <h4 className="text-xl mb-3 kanitfont">{location}</h4>
        <h6 className="text-lg kanitfont">{description}</h6>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default TimeLineCop
