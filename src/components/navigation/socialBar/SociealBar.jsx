import React from "react"
import "../header.css"
import {
  GitHub,
  Instagram,
  LinkedIn,
  MenuOutlined,
  PieChartOutlined,
} from "@mui/icons-material"
const SociealBar = () => {
  return (
    <ul className="social-bar-list">
      <li className="social-bar-item">
        <LinkedIn />
      </li>
      <li className="social-bar-item">
        <GitHub />{" "}
      </li>
      <li className="social-bar-item">
        {" "}
        <Instagram />{" "}
      </li>
      {/* <li className="social-bar-item"></li> */}
    </ul>
  )
}

export default SociealBar
