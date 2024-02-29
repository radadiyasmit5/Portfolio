import {Button, Card} from "antd"
import React, {useEffect} from "react"
import "./technologies.css"
import data from "./data.json"
const Technologies = ({technologiesRef}) => {
  const techData = data.data
  return (
    <div ref={technologiesRef} className="technologies-container">
      <div className="skill-container-wrapper">
      <h1 className="text-3xl text-center mb-10 techHeading">Tech Stack</h1>
        <div className="skills-container">
          {techData.map((data) => (
            <div
              class="py-2 px-4 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40 h-14 skill-item"
              style={{
                opacity: 1,
                transform: "none",
                backgroundColor: "rgb(157 145 145 / 63%)",
              }}
            >
              {" "}
              <i className={`${data.iconclass} text-3xl`}></i>
              <h4 class="text-md ml-4">{data.technology}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technologies
