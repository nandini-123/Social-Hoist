import React from 'react'
import './smpage.css';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Smpage(props) {
    return (
     <>

<div className="max-width">
           <div className="content">
{/* LEFT-COLUMN */}
            <div className="column-left">
                   <div className="topic">SOCIAL MEDIA</div> 
</div>
{/* RIGHT-COLUMN */}
               <div className="column-right">
                       <div className="info">
                           <p className='smpage-content'>A single place to share, curate and discover visual content that tells a story</p>  
                       </div>
               </div>
                  
            </div>
</div>

     </>

    )
}
