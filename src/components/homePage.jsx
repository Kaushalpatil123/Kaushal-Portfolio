import React from 'react'
import Navbar from './Navbar'
import Spotlight from './Spotlight'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'

const homePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Spotlight />
      <Experience />
      <Skills />
      <Projects/>
    </>
  )
}

export default homePage