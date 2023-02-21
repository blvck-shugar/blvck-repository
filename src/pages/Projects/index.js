import React, { useState } from 'react'
import { ProjectHeader, ProjectLand } from '../../components'
import CaseStudy from '../../components/Body/projects/case-study'
import Portfolio from '../../components/Body/projects/portfolio'
import './projects.css'
import '../../components/media-queries/projects.css'

export  function Projects({toggleTheme, theme, toggleLoading, loading, toggleLoad}) {
  const [choice, setChoice]=useState(0)
  return (
    <div>
     <ProjectHeader theme={theme} toggleTheme={toggleTheme} toggleLoading={toggleLoading} loading={loading} choice={choice} setChoice={setChoice} toggleLoad={toggleLoad}/>
     <ProjectLand  theme={theme} toggleTheme={toggleTheme} toggleLoading={toggleLoading} loading={loading} choice={choice} setChoice={setChoice} />
     <Portfolio theme={theme} toggleTheme={toggleTheme} toggleLoading={toggleLoading} loading={loading} choice={choice} setChoice={setChoice}/>
     <CaseStudy theme={theme} toggleTheme={toggleTheme} toggleLoading={toggleLoading} loading={loading} choice={choice} setChoice={setChoice}/>
    </div>
  )
}
