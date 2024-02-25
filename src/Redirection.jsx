import React from "react"
import Header from "./components/navigation/Header"
import {Route, Routes} from "react-router-dom"
import {Home} from "./pages/Home"
const Redirection = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default Redirection
