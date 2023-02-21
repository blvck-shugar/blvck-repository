import React from 'react'

export function Certificates({tab,theme}) {
  return (
    <div style={{
      display: tab===1? 'flex':'none',
    }} className='skill-gall'>
       <div className='box1'>
        <img src="images/certificate/smartech.jpg" alt="" />
       <div className='overlay'></div>
      </div>
      <div className='box1'>
        <img src="images/certificate/jobberman.png" alt="" />
       <div className='overlay'></div>
      </div>
      <div className='box1'>
        <img src="images/certificate/coursera.svg" alt="" />
       <div className='overlay'></div>
      </div>
      <div className='box1'>
        <img src="images/certificate/udemy.jpg" alt="" />
       <div className='overlay'></div>
      </div>
    </div>
  )
}
