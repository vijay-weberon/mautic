'use client'
// import { useParams, usePathname } from 'next/navigation'
// import Script from 'next/script'
// import React from 'react'
// import formSetData from '../../components/formset.json'
// import MAUTIC_FORMSET from '../../components/tracker-config'
// import Mauticform from '../Mauticform'
// const page = () => {
//   const pathname = usePathname()
//   const path = pathname.slice(1)
//   // console.log('formsetData ',formSetData)
//   const formSetValue = formSetData[path]
//   // console.log("path" , path)
//   // console.log("formsetvalue ",formSetData[path])
//   // console.log(MAUTIC_FORMSET[formSetValue][1])
//   const formId = MAUTIC_FORMSET[formSetValue][1]
//   console.log('formId',formId)
//   return (
//     <>
//     {
//       formId? <Mauticform formId={formId}/>:null
//     }
  
//        </>
//   )
// }

// export default page\

import React from 'react'
import default_banner from '../../components/images/default_banner.jpg'
import './vip_buyer.css'
const vip_buyer = () => {
  return (
    <div id='page-wrapper' >
      <div id="content" className="bgclr0">
    
    <div className="header-container" role="banner">
        <div id="butterBarContainer"></div>
        <header id="banner_header" className="wrapper clearfix bgclr8">
        
            <div >
                <div id="pp" >
                    <img src="images/sw/banners/new/praveen.png" width="100%" onError="logResourceLoadError(this)" />
                </div>
                
                <div >
                    <h1 id="usp">							
                        <div id='banner-text' >Beat out other buyers to Hot New Listings</div>
                    </h1>
                </div>
            </div>
            
            <img id="banner" src={default_banner} width="100%" alt="You can become a VIP Buyer and Beat Other Buyers to Hot New Listings Image" onError="logResourceLoadError(this)" />
        </header>
    </div>
    
    <div className="main-container">
        <div className="main wrapper clearfix bgclr6">
            
            <article className="bgclr8" role="article">
                <div id="articlecntm" className="articlecnt">
                    
                    <h2>Receive Priority Access To ALL New Listings That Match Your Home Buying Criteria</h2>
                    <h3><font color="#0000ff">Here's how it works...</font></h3>
                    <br></br>
                    
                    <ul> 
                        <li>Our Exclusive Buyer Profile System saves you Time and Money. Simply tell us what you're looking for and get priority access to ALL homes that match your criteria, including Bank Foreclosures, Company Owned Properties and other Distress Sales.</li>
                        <li>No more wasted time looking at out-dated information in newspapers or searching the internet. Priority access means you're there first before other buyers, so you can negotiate the lowest possible price and your time is not wasted viewing homes that don't interest you.</li>
                        <li>It's easy to get started...</li>			
                        <li>Order your free report today. To order a FREE Special Report:</li>                	
                    </ul>            
                </div>
            </article>
            
            <aside className="bgclr3" id="aside">
                <p id="cta" className="cta">
                    <a className="cta_button" href="tel:8442659508,,,5004">
                        Call 844-265-9508 Ext 5004
                        <i className="fa fa-phone cta_icon"></i>	
                    </a>
                    <span className="cta_span">_ _ _ _ _ _ _ _ _ _ _ _ OR _ _ _ _ _ _ _ _ _ _ _ _</span>
                </p>
            </aside>
        </div>
    </div>
    
    <div className="footer-container">
        <footer className="wrapper">
            <div id="contactinfo">
                <div id="disclosure">
                    <center>Praveen Kumar, CA BRE Lic#: 01928307<br></br> 12935 Alcosta Blvd. #3681, San Ramon, California, 94583</center>
                </div>
            </div>
        </footer>
    </div>
</div>


    </div>
  )
}

export default vip_buyer

