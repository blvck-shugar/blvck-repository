import React from 'react'
import './contact.css'
import '../../components/media-queries/contact.css'

import { ContactBody } from '../../components'
import ContactFoot from '../../components/Footers/contactFoot'
import { ContactHead } from '../../components/Headers/contact'

export function Contact({toggleTheme, theme, toggleLoading, loading, toggleLoad, load}) {
  return (
    <div>
     <ContactHead theme={theme} toggleTheme={toggleTheme} toggleLoading={toggleLoading} loading={loading} toggleLoad={toggleLoad} load={load}/>
     <ContactBody theme={theme} toggleTheme={toggleTheme} toggleLoading={toggleLoading} loading={loading}/>
     <ContactFoot theme={theme} toggleTheme={toggleTheme} toggleLoading={toggleLoading} loading={loading}/>
    </div>
  )
}
