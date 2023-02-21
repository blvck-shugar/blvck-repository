import React from 'react'
import { Frame} from './Frame' 


export function PhotoBox({tab, theme}) {
  return (
    <div style={{
      display:tab===2? 'initial':'none',
      height:'100vh',
      position:'relative',
      
    }} className='photobox'>
      <div className='intro'>
        <h2>LET THE PICTURES TALK</h2>
        <p>toggle to see more intersts...</p>
      </div>
      <Frame />
    </div>
  )
}
