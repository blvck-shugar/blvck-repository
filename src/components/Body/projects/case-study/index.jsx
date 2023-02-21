import React from 'react'
import { Case, InvertedCase } from '../../../case'
import './case.css'

export default function CaseStudy ({toggleTheme,theme,toggleLoading,loading,choice,setChoice}) {
  return (
    <div style={{
        display:choice===2? 'initial':'none'
    }}>
      
        <div className='portIntro'>
            <p>Case Study</p>
            <h2>My Case Studies</h2>
        </div>
       <Case 
       imglink={"images/projects/expensetracker.png"}
        no={'01'} 
        detail={'Case study App built to keep track of the day to day flow of cash and expenses made everyday. Keep track of your expense with the'} 
        casename={'Expense Tracker'} 
        high={'Blvck Tracker'}
        />

       <InvertedCase 
       imglink={"images/projects/frame13.png"} 
       no={'02'}
       detail={'Case study App built as a case study for a sneakers E-commerce online store, enjoy the amazing experience that is the'} 
       casename={'Blvck Bird'} 
       high={'Blvck Bird'}
       />

<Case 
       imglink={"images/projects/blvckquiz2.png"}
        no={'03'} 
        detail={'Case study App built to test the users analytical, logical and verbal reasoning, give your IQ a workout with the'} 
        casename={'Quiz App'} 
        high={'Blvck Quiz'}
        />

<InvertedCase 
       imglink={"images/projects/bvckbnbhome.png"} 
       no={'04'}
       detail={'Case study App built as a clone to emulate major functionalities of AirBnb, enjoy the comfort behind the '} 
       casename={'Blvck BnB'} 
       high={'Blvck BnB'}
       />
    </div>
  )
}