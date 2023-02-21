import React from 'react'
import './loader.css'

export function Loader({theme, toggleTheme}) {
  return (
    <div style={{
        width:'100vw',
        height:'100vh',
        position:'fixed',
        zIndex:5,
        backgroundColor: 'rgba(0,0,0,0.6)',
        margin:0,
        padding:0,
        top:0,
        bottom:0,

    }} className='fade-out'>
      <img src={`images/gifs/gif${theme==='light'? '1':''}.gif `}style={{
        width:'100%',
        height:'100%'
      }} alt='k'/>
    </div>
  )
}


export function Loader2({theme, toggleTheme}) {
  return (
    <div style={{
        width:'100vw',
        height:'100vh',
        position:'fixed',
        zIndex:5,
        backgroundColor: 'rgba(0,0,0,0.6)',
        margin:0,
        padding:0,
        top:0,
        bottom:0,

    }} className='fade-out'>
      <img src={`images/gifs/load${theme==='light'? 'light':'dark'}.gif `}style={{
        width:'100%',
        height:'100%'
      }} alt='k'/>
    </div>
  )
}
