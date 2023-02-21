import React from 'react'


export function HomeHeader({theme, toggleTheme}) {
console.log(theme)
  return (
<div className='big-nav'>
        <div className='nav1'>
            <div className="logo-box"><img src='images/icons/BlvckLogo.png' className='logo' style={{
              display: theme==='dark'? 'initial':'none'
            }} alt='k'/>
            <img src='images/icons/BlvckLogo2.jpg' className='logo2' style={{
              display: theme==='light'? 'initial':'none'
            }} alt='k'/>
            
            </div>
            <div className="logo-word"
            >LVCK CODA</div>
        </div>

  <div className="App-logo" onClick={toggleTheme} checked={theme==="dark"} >
     <img src='images/icons/sun.png' style={{width:'100%',
     display: theme==="dark"?'initial':'none',
    }} alt='k'/>
     <img src='images/icons/moon.png' style={{
      width:'50%',
      display: theme==="light"?'initial':'none',
      }} alt='k'/>
  </div>

        <div className='title'>
                DANIEL EWURUM
            
        </div>
      </div>

    
  )
}
