import React from 'react'

export function ContactBody({theme}) {
  return (
    <>
      <div className='contact-box'>

        <div className='contact1'>
            <div className='con1'>
                <h1>Contact Us</h1>
                <p>we are committed to processing the information in order to contact you and talk about your project</p>
            </div>
            <div className='con2'><img src={`images/icons/contactemail${theme==='light'? '1':''}.svg`} alt="" /><p>ewurumdaniel3@gmail.com</p></div>
            <div className='con2'><img src={`images/icons/contactaddress${theme==='light'? '1':''}.svg`} alt="" /><p>Remote</p></div>
            <div className='con2'><img src={`images/icons/contactno${theme==='light'? '1':''}.svg`} alt="" /><p>+234 8148 098 326</p></div>
        </div>

        <div className='contact2'>
        <div>
            <input type="text" name="" id="" placeholder='Name' required/>
            <input type="email" name="" id="" placeholder='Email' required/>
            <input type="text" name="" id=""  placeholder='website'/>
            <input type="text" name="" id="big-input" placeholder='Message'/>
            <div><button className='form-submit'>Submit</button></div>
        </div>
        </div>
      </div>
      <div className='contact-foot-box'>
        <div className='cont1'>
            <div>
              <div className="foot-box">
                 <img src='images/icons/BlvckLogo.png'  style={{
              display: theme==='dark'? 'initial':'none'
            }} alt='k'/>
                <img src='images/icons/BlvckLogo2.jpg' style={{
              display: theme==='light'? 'initial':'none'
            }} alt='k'/>
            
            </div>
            </div>
            <p>That Tech Company That Delivers.</p>
        </div>
        <div className='cont2'>
              <p className='foot-title' style={{color:theme==='light'? '#6565ff':'#D4AF37', fontWeight:900 ,}}>EXPLORE</p>
              <p>SUPPORT</p>
              <p>ABOUT US</p>
              <p>BLOG</p>
        </div>
        <div className='cont2'>
              <p className='foot-title' style={{color:theme==='light'? '#6565ff':'#D4AF37', fontWeight:900,}}>LEGAL</p>
              <p>TERMS OF USE</p>
              <p>Privacy Policy</p>
        </div>
        <div className='cont2'>
              <p className='foot-title' style={{color:theme==='light'? '#6565ff':'#D4AF37', fontWeight:900,}}>SOCIALS</p>
              <p>TWITTER</p>
              <p>LINKEDIN</p>
              <p>INSTAGRAM</p>
        </div>
      </div>
      <div className='bttm-hug' style={{
        backgroundColor: theme==='light'? '#6565ff': '#D4AF37'
      }}></div>
    </>
  )
}
