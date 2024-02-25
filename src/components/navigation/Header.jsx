import {Link, Outlet} from "react-router-dom"
import React, {useContext} from "react"
import "./header.css"
import {SectionContext} from "../../context/SectionScrollContext"

const Header = () => {
  const {
    handleSectionchange,
    heroRef,
    experienceRef,
    technologiesRef,
    headerRef,
  } = useContext(SectionContext)

  return (
    <>
      <header class="Header" ref={headerRef}>
        <nav class="Navbar">
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
              <Link to="#" className="nav-link-item">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
