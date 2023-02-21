import { Link } from 'react-router-dom'
import { Footer } from '../../../Footers'

export function ProjectLand({toggleTheme, theme, toggleLoading, loading, choice, setChoice}) {
    
  return (
    <>
      <div style={{
            display:choice===0? 'grid':'none',
        }} className='project-land' >
            <div className='choice-box' >
                <div onClick={()=>setChoice(1)}><button style={{marginLeft:15,}} className='choice-bttn' >Portfolio</button></div>
                <div onClick={()=>setChoice(2)}><button  style={{marginRight:15, }} className='choice-bttn'>Case Studies</button></div>
            </div>
            <div><button className='pland-bttn' onClick={{toggleLoading}}><Link to={'/'} className='link-edit'>Home?</Link></button></div>
            <Footer/>
      </div>
      
    </>
  )
}
