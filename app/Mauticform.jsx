import React from 'react'
import Script from 'next/script'

const Mauticform = (props) => {
    console.log(props.formId)
  return (
    <>
     <Script type="text/javascript" src={`//leads-blue-weberealty.thrivebrokers.com/form/generate.js?id=${props.formId}`}></Script>
   
    </>
  )
}

export default Mauticform