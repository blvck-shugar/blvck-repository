import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Certificates } from '../../certificates'
import { PhotoBox } from '../../gallery'
import { Skills } from '../../skills'

export function AboutBody({theme}) {
  const [tab, setTab]=useState(0)
  return (
    <div className='about-body'>

        <div className='experience'>
          <div className='exp'>
            <p><span>2</span><br/>
           Year of work experience</p>
          </div>
          <div className='exp'>
          <p><span>28</span><br/>
           Completed projects</p>
          </div>
          <div className='exp'>
          <p><span>20+</span><br/>
           Satisfied customers</p>
          </div>
        </div>

        <div className='reachout-bttn'>
             <a className='reach-div' href="files/Ewurum_Chibuike_Daniel_CV.pdf" download="Daniel Ewurum's CV"><button className='d-cv'>Download CV <img src="images/icons/bottom-alignment.svg" alt="" /></button></a>
            <div className='reach-div'><button className='c-m'><Link to={'/contact'} className='link-edit'>Contact Me</Link></button></div>
        </div>

        <div className='ig-nav'>
            <div onClick={()=>setTab(0)}>
              <img src={`images/icons/tools${(tab===0 && theme==='dark'? '1':'') || (tab===0 && theme==='light'? '12':'')}.svg`} alt=""/>
              </div>
            <div onClick={()=>setTab(1)}>
              <img src={`images/icons/certificates${(tab===1 && theme==='dark'? '1':'') || (tab===1 && theme==='light'? '12':'')}.svg`} alt="" />
              </div>
            <div onClick={()=>setTab(2)}>
              <img src={`images/icons/camera${(tab===2 && theme==='dark'? '1':'') || (tab===2 && theme==='light'? '12':'')}.svg`} alt="" /></div>
        </div>

        <div className='gallery'>
           <Skills theme={theme} tab={tab}/>
           <Certificates theme={theme} tab={tab}/>
           <PhotoBox theme={theme} tab={tab}/>

        </div>
    </div>
  )
}
