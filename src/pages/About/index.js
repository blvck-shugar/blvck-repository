import React from 'react'
import { AboutHeader } from '../../components'
import { AboutBody } from '../../components/Body'
import './about.css'
import '../../components/media-queries/About.css'
import '../../components/media-queries/gallery.css'



export  function About({theme,toggleTheme, toggleLoad, load}) {
  return (
    <div className='about-fit'>
      <AboutHeader  theme={theme}toggleTheme={toggleTheme} toggleLoad={toggleLoad} load={load} />
      <AboutBody  theme={theme}toggleTheme={toggleTheme}/>
    </div>
  )
}
