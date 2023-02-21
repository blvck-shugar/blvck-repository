import React from 'react'
import { HomeHeader } from '../../components'
import { HomeBody } from '../../components/Body'
import './home.css'
import '../../components/media-queries/home.css'

export  const HomePage=({theme,toggleTheme, toggleLoading, loading})=>{
  return (
    <div className='fit-body'>
     <HomeHeader theme={theme} toggleTheme={toggleTheme} />
     <HomeBody theme={theme} toggleTheme={toggleTheme} toggleLoading={toggleLoading} loading={loading} />
    </div>
  )
}
