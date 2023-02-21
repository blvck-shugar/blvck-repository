import React from 'react'
import './portfolio.css'
import { Work } from './work'

export default function Portfolio({toggleTheme,theme,toggleLoading,loading,choice,setChoice}) {
  return (
    <div style={{
        display:choice===1? 'initial':'none'
    }}>
      <div className='portIntro'> 
        <p>PORTFOLIO</p>
        <h2>PEOPLE LIE, WORK DONT</h2>
      </div>

      <div className='portBox' >
                <div className='explore'>Explore All Services</div>
            <Work primg1={'images/projects/findme.jpg'} primg2={'images/projects/findme2.jpg'} primg3={'images/projects/findme3.jpg'}/>
            <Work primg1={'images/projects/DA.jpg'} primg2={'images/projects/DA1.jpg'} primg3={'images/projects/DA2.jpg'}/>
             <Work primg1={'images/projects/rucheHome.png'} primg2={'images/projects/ruchecctv.png'} primg3={'images/projects/rucheService.png'}/>
             <Work primg1={'images/projects/hydrahome.png'} primg2={'images/projects/hydrasales.png'} primg3={'images/projects/hydrafilter.png'}/>
             <Work primg1={'images/projects/1412HomePage.png'} primg2={'images/projects/1412cart.png'} primg3={'images/projects/1412sales.png'}/>
      </div>
    </div>
  )
}
