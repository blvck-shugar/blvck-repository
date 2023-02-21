import React from 'react'
import { Link } from 'react-router-dom'

export function ContactHead({toggleTheme,theme,toggleLoading,loading, toggleLoad}) {
  return (
    <>
       <div><button className='back-bttn' onClick={toggleLoad}><Link to={'/'} className='link-edit'>Home?</Link></button></div>
    <div className="App-logo" onClick={toggleTheme} checked={theme==="dark"}
    style={{ 
        top:0,
        bottom:0,
        marginTop:0,
        marginBottom:0,
    }} >
     <img src='images/icons/sun.png' style={{width:'100%',
     display: theme==="dark"?'initial':'none',
    }} alt='k'/>
     <img src='images/icons/moon.png' style={{
      width:'50%',
      display: theme==="light"?'initial':'none',
      }} alt='k'/>
 </div>
    </>
  )
}
