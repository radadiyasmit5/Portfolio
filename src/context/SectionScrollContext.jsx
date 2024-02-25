import React, {createContext, useRef} from "react"

export const SectionContext = createContext(null)
export const SectionScrollContext = ({children}) => {
  const handleSectionchange = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop -  headerRef?.current?.offsetHeight,
      behavior: "smooth",
    })
  }
  const heroRef = useRef(null)
  const experienceRef = useRef(null)
  const technologiesRef = useRef(null)
  const headerRef = useRef(null)
  return (
    <SectionContext.Provider
      value={{
        handleSectionchange,
        heroRef,
        experienceRef,
        technologiesRef,
        headerRef,
      }}
    >
      {children}
    </SectionContext.Provider>
  )
}
