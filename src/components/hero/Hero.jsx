import React, {useState, useEffect, useRef} from "react"
import "./hero.css"
import {useTypewriter, Cursor, Typewriter} from "react-simple-typewriter"
import {unstable_useEnhancedEffect} from "@mui/material"
import {Menu} from "antd"
import {PieChartOutlined} from "@mui/icons-material"

const Hero = ({heroRef}) => {
  const [isFirstIterDone, setisFirstIterDone] = useState(false)
  const [allIterDone, setallIterDone] = useState(false)
  const [lineone] = useTypewriter({
    words: ["Hello, I'm Smit Radadiya"],
    loop: 1,
    onLoopDone: () => setisFirstIterDone(true),
  })

  return (
    <>
      <div className="heroContainer">
        <div className="menuContainer-visible menuContainer-hidden"></div>
        <section class="Hero" ref={heroRef}>
          <div class="Hero-content ">
            <h1 className="text-5xl my-5 hello">
              {lineone} {!isFirstIterDone && <Cursor cursorColor="red" />}
            </h1>

            {/* {isFirstIterDone && (
          <h1 className="font-black text-7xl mb-4">
            {linetwo}
            {!allIterDone && <Cursor cursorColor="red" />}
          </h1>
        )} */}
            {isFirstIterDone && (
              <div className="font-black text-6xl mb-4">
                <Typewriter
                  words={["Front End Developer", "Full Stack Developer"]}
                  cursor={false}
                  loop={Infinity}
                  cursorColor="red"
                  onLoopDone={() => {
                    setallIterDone(true)
                  }}
                />
              </div>
            )}
            <p className="uppercase text-2xl">and this is my portfolio</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hero
