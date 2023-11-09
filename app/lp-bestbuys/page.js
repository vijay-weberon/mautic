'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import formSetData from '../../components/formset.json'
import MAUTIC_FORMSET from '../../components/tracker-config'
import Mauticform from '../Mauticform'

const page = () => {
    const pathname = usePathname()
  const path = pathname.slice(1)
  const formSetValue = formSetData[path]
  const formId = MAUTIC_FORMSET[formSetValue][1]
  console.log('formId',formId)
  return (
    
    <div> 
      <Mauticform formId={formId}/>
    </div>
  )
}


export default page