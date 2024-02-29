import React, {useContext, useEffect, useRef, useState} from "react"
import {useLocation, useNavigate, useParams} from "react-router-dom"
import ContactForm from "../components/Contact/ContactForm"
import Experience from "../components/Experience/Experience"
import Hero from "../components/hero/Hero"
import Technologies from "../components/Technologies/Technologies"
import {SectionContext} from "../context/SectionScrollContext"

export const Home = () => {
  const {heroRef, experienceRef, technologiesRef,contactRef} = useContext(SectionContext)
  // const [activeComponent, setActiveComponent] = useState(null)

  // useEffect(() => {
  //   if (location.pathname === "/experience") {
  //     window.scrollTo({
  //       top: 1000,
  //       behavior: "smooth",
  //     })
  //   }
  //   if (location.pathname === "/home") {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     })
  //   }
  // }, [location.pathname])

  // useEffect(() => {
  //   if (activeComponent !== null) {
  //     navigate(`/${activeComponent}`)
  //   }
  // }, [activeComponent])

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const herorefBounds = heroRef.current.getBoundingClientRect()
  //     const experienceRefBounds = experienceRef.current.getBoundingClientRect()
  //     const windowHeight = window.innerHeight

  //     if (herorefBounds.top >= 0 && herorefBounds.bottom <= windowHeight) {
  //       setActiveComponent("home")
  //     }

  //     // Check if Component 2 is in view
  //     else if (
  //       experienceRefBounds.top >= 0 &&
  //       experienceRefBounds.bottom <= windowHeight
  //     ) {
  //       setActiveComponent("experience")
  //     }
  //   }
  //   window.addEventListener("scroll", handleScroll)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  return (
    <>
      {" "}
      <Hero heroRef={heroRef} />
      <Experience experienceRef={experienceRef} />
      <Technologies technologiesRef={technologiesRef} />
      <ContactForm contactRef={contactRef}/>
    </>
  )
}
