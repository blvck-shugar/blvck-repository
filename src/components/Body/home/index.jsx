import React from 'react'
import { Link } from 'react-router-dom'

export  function HomeBody({theme, toggleTheme, toggleLoading, loading}) {
  return (
    <div className="main-body">
        <div className='gif-box'>
        <iframe src="https://giphy.com/embed/Rm3SJ0id6L9ZDLotBH"  frameBorder="0" class="giphy-embed" allowFullScreen className='home-gif' sandbox='allow-forms allow-scripts' title='gifbox' style={{
            display:theme==='dark'? 'initial':'none',
            cursor:'Pointer',
        }}></iframe>
        <button style={{
          display:theme==='dark'? 'initial':'none', 
          cursor:'Pointer',
      }} className='game-btn heartbeat'><a href="https://blvckxenzia.netlify.app/">Click to play!!</a></button>

        <iframe src="https://giphy.com/embed/Rm3SJ0id6L9ZDLotBH" frameBorder="0" class="giphy-embed" allowFullScreen className='home-gif'  sandbox='allow-forms allow-scripts' title='gifbox' style={{
            display:theme==='light'? 'initial':'none', 
            cursor:'Pointer',
        }}></iframe>
        <button style={{
          display:theme==='light'? 'initial':'none', 
          cursor:'Pointer',
      }} className="game-btn heartbeat"><a href="https://blvckxenzia.netlify.app/">Click to play!!</a></button>
        </div>
      <div className='side-links'>
       <div onClick={toggleLoading}><Link to={'/about'} className='link-edit'>ABOUT</Link></div>
        <div onClick={toggleLoading}><Link to={'/projects'} className='link-edit'>PROJECTS</Link></div> 
         <div onClick={toggleLoading}><Link to={'/contact'} className='link-edit'>CONTACT</Link></div> 
        
      </div>
      <div className='stack'>
        Web Developer 
        <p  className='web'>full<span className='stac'> stack</span></p>
      </div>
      <div className='big-photo-box flick'>
        <div className='photo-box'><img src='images/aesthetics/image1.png' alt='k' /></div>
        <img src={`images/aesthetics/Ellipse1${theme==='light'? '1':''}.svg`} alt='k' className='ellipse1'/>
        <div className='elbox'>
        <img src={`images/aesthetics/Ellipse2${theme==='light'? '2':''}.svg`}  alt='k' className='ellipse2'/>
        </div>
   
      </div>
      <div className='home-icons'>
        <a href="https://twitter.com/blvckshugar?t=lNk9G92Cg1SKkygiGrwuYw&s=09"><img src={`images/icons/vector${theme==='light'?'12':''}.svg`} style={{margin:'15px 8px 3px', cursor:'Pointer',}} alt='k'/></a>
        <a href="https://www.facebook.com/daniel.blaize.16?mibextid=ZbWKwL"><img src={`images/icons/vector1${theme==='light'? '1':''}.svg`} style={{margin:'10px 8px 3px', cursor:'Pointer' }} alt='k'/></a>
        <a href="https://github.com/blvck-shugar"><img src={`images/icons/github${theme==='light'? '1':''}.svg`} style={{margin:'15px 8px 3px', cursor:'Pointer'}} alt='k'/></a>
        <a href="https://www.linkedin.com/in/daniel-ewurum-702517231"><img src={`images/icons/linkdin${theme==='light'? '1':''}.svg`} style={{margin:'3px 10px 3px', cursor:'Pointer'}} alt='k'/></a>
      </div>
    </div>
  )
}
