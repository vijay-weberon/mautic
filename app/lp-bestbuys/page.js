'use client'
import { useParams, usePathname } from 'next/navigation'
import Script from 'next/script'
import React from 'react'
import formSetData from '../../components/formset.json'
import MAUTIC_FORMSET from '../../components/tracker-config'

const page = () => {
    const pathname = usePathname()
  const path = pathname.slice(1)
//   console.log('formsetData ',formSetData)
  const formSetValue = formSetData[path]
//   console.log("path" , path)
//   console.log("formsetvalue ",formSetData[path])
//   console.log(MAUTIC_FORMSET[formSetValue][1])
  const formId = MAUTIC_FORMSET[formSetValue][1]
  console.log('formId',formId)
  return (
    
    <div> <Script type="text/javascript" src={`//leads-blue-weberealty.thrivebrokers.com/form/generate.js?id=${formId}`}></Script>
    </div>
  )
}


export default page