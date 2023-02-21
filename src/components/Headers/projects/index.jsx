import React from 'react'

export function ProjectHeader({toggleTheme,theme,toggleLoad,loading, setChoice, choice}) {
  return (
    <div className='p-head'>
       <div onClick={()=>{setChoice(0)}} style={{
          display: choice===0? 'none':'initial'
       }}><button className='back-bttn' onClick={toggleLoad} >Back</button></div>
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
    </div>
  )
}
