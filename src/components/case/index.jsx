import React from 'react'

export  function Case({imglink, no, detail, casename, high}) {
  return (
    <>
       <div className='case-box'>
            <div className='case1'>
                <div className='case-img'>
                    <img src={imglink} alt="" />
                </div>
                <div className='case-con'>
                    <p className='case-highlight'>{no}</p>
                    <h3>{casename}</h3>
                    <p className='case-detail'>{detail} <span className='case-highlight'>{high}</span></p>
                    <div><button className='case-bttn'>
                        Details</button></div>
                </div>
            </div>
        </div>
    </>
  )
}


export  function InvertedCase({imglink, no, detail, casename, high}) {
  return (
    <>
         <div className='case-box'>
            <div className='case1'>
                <div className='case-con'>
                    <p className='case-highlight'>{no}</p>
                    <h3> {casename} </h3>
                    <p className='case-detail'>{detail}<span className='case-highlight'> {high} </span></p>
                    <div><button className='case-bttn'>
                        Details</button></div>
                </div>
                <div className='case-img'>
                    <img src={imglink} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}
