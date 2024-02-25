import React, {useContext, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {SectionContext} from "./context/SectionScrollContext"
import Redirection from "./Redirection"

const App = () => {
  const navigate = useNavigate()
  const {handleSectionchange, heroRef} = useContext(SectionContext)

  // useEffect(() => {
  //   window.onload = () => {
  //     console.log("reloaded")
  //     console.log(heroRef);
  //     handleSectionchange(heroRef)
  //   }
  // }, [])

  return (
    <>
      <Redirection />
    </>
  )
}

export default App
