import React from 'react'
import './benefits.css';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function card(props) {
    return (
     <>
<div className="page-title">
     <Navbar/>
    <h3 className="benefits-heading">Benefits of Social Media Marketing</h3>
           <div className="contents">
{/* LEFT-COLUMN */}
            <div className="left-column">
                   <div className="features">
                   <ul>
                <li style={{'listStyle':'none', 'marginBottom': '30px' }}><h4 className='subhead'>FEATURES:-</h4></li>
                    <li>Boost Brand Visibility</li>
                    <li>Brand Awareness</li>
                    <li>Increased Brand Recognition</li>
                    <li>Increase business traffic</li>
                    <li>Website Traffic</li>
                   </ul>
                   </div> 
</div>
{/* RIGHT-COLUMN */}
               <div className="right-column">
                       <div className="details-info">
                           <p>Social media is often an under-appreciated and undervalued marketing practice. Business owners generally understand the need for having a social media presence but can fail to recognise just how beneficial it can be to their conversion rates.</p>  
                           <p> According to We Are Social, as of January 2020 more than 3.80 billion people are active on social media . Taking this into consideration, this article will outline 3 benefits of having social media integrated within your business’ marketing strategies.</p>
                           <ul>
                            <li>Constant Communication</li>
                            <li>Customer feedback</li> 
                            <li>Customer Service</li>
                           </ul>
                       </div>
                   </div>
                     
                   </div>
                   </div>

<Footer/>
     </>

    )
}




                