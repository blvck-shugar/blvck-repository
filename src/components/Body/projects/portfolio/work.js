import React from 'react'

export function Work({primg1 ,primg2,primg3}) {
  return (
    <div className='portCard'>
    <div className='portt'>
      <div className='port1'>
          <img src={primg1} alt="" className='portimg1'/>
          <img src={primg2} alt="" className='portimg2' />
      </div>
      <div className='port2'>
        <img src={primg3} alt="" />
      </div>
    </div>
</div>
  )
}
