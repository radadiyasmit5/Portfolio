import {Link, Outlet} from "react-router-dom"
import React, {useContext} from "react"
import "./header.css"
import {SectionContext} from "../../context/SectionScrollContext"
import {Mentions, Menu} from "antd"

import SociealBar from "./socialBar/SociealBar"

const Header = () => {
  const {
    handleSectionchange,
    heroRef,
    experienceRef,
    technologiesRef,
    headerRef,
    contactRef,
  } = useContext(SectionContext)

  return (
    <>
      <header class="Header" ref={headerRef}>
        <nav class="Navbar">
          {/* <div className="menuOutlinedcontainer">
            <MenuOutlined className="text-white " />
          </div> */}
          <div style={{width: "10%"}} className="header-dummy-div"></div>
          <ul class="Nav-links">
            <li>
              <Link
                // to="/"
                className="nav-link-item"
                onClick={() => handleSectionchange(heroRef)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                // to="/experience"
                className="nav-link-item"
                onClick={() => handleSectionchange(experienceRef)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="nav-link-item"
                onClick={() => handleSectionchange(technologiesRef)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="nav-link-item"
                onClick={() => handleSectionchange(contactRef)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="social-bar-container">
            <SociealBar />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
