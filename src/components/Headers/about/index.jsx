import React from 'react'
import { Link } from 'react-router-dom'
import '../../../pages/About/about.css'

export function AboutHeader({theme, toggleTheme, toggleLoad}) {
  return (
    <div className='about-head' style={{
      marginTop:0,
      top:0,
    }}>
      <div><button className='back-bttn' onClick={toggleLoad}><Link to={'/'} className='link-edit'>Home?</Link></button></div>
    <div className="App-logo" onClick={toggleTheme} checked={theme==="dark"} >
     <img src='images/icons/sun.png' style={{width:'100%',
     display: theme==="dark"?'initial':'none',
    }}alt='k'/>
     <img src='images/icons/moon.png' style={{
      width:'50%',
      display: theme==="light"?'initial':'none',
      }} alt='k'/>
  </div>

  <div className='about-profile'>
            <div className='profile-image-box'>
                <div className='pib1'>
                    <div className='pib2'>
                    </div>
                </div>
            </div>
            <div className='profile-con'>
                <h1>DANIEL EWURUM</h1>
                <p>Software Engineer</p>
                <div className='about-icons'>
                    <a href="https://github.com/blvck-shugar"><img src={`images/icons/github${theme==='light'? '1':''}.svg`} alt="" /></a>
                    <a href="https://twitter.com/blvckshugar?t=lNk9G92Cg1SKkygiGrwuYw&s=09"><img src={`images/icons/twitter${theme==='light'? '1':''}.svg`} alt="" /></a>
                    <a href="https://www.linkedin.com/in/daniel-ewurum-702517231"><img src={`images/icons/linkdin${theme==='light'? '1':''}.svg`} alt="" /></a>
                    <img src={`images/icons/youtube${theme==='light'? '1':''}.svg`} alt="" />
                </div>
            </div>
      </div>
    </div>
  )
}
