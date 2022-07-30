import React, {useState} from 'react'
import './card.css';
// import plan1 from './Plan1'
// import plan2 from './Plan2'
// import plan3 from './Plan3'

import Details from './Details.js';

export default function Card(props) {
  // let start_popup = document.getElementsById('starter-popup');

  // let growth = document.getElementById('growth-popup');

  // let advanced = document.getElementById('advanced-popup');

  //   function starterf() {
  //   start_popup.classList.add("showPopupStart");
  //       }

  //       function growthf() {
  //         growth.classList.add("showPopupgrowth");
  //             }

  //             function advancedf() {
  //               advanced.classList.add("showPopupadvanced");
  //                   }
  //         const closePopupStart = ()=>{
  //           start_popup.classList.remove("showPopupstart");
  //         }
  //         const closePopupGrowth = ()=>{
  //           start_popup.classList.remove("showPopupgrowth");
  //         }
  //         const closePopupAdvanced = ()=>{
  //           start_popup.classList.remove("showPopupadvanced");
  //         }

// window.onclick = function(event) {
//             if (event.target == start_popup) {
//               start_popup.style.display = "none";
//             }

// var modal = document.getElementById("myModal");
// var btn = document.getElementById("starter");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// document.querySelector('#starter').addEventListener('click',()=>{
//  document.querySelector('#modalbox').classList.add('showmodalbox');

// })
//  const close = ()=>{
//   document.querySelector('#modalbox').classList.remove('showmodalbox');
//  }
//   document.querySelector('#starter').addEventListener('click',(e)=>{
  
// })
// document.querySelector('#starter').addEventListener('click',(e)=>{
  
// })        
 return (
   <>
   <div className='plans'> 
<h3 className='heading '>Find your perfect plan</h3>
<p className='subtitle'>Get Plus subscription and help from us</p>

<div className="cards-div">

  <div className="card starter" id='starter' >
  {/* onClick={starterf} */}
    <div className="card-body">
      <h5 className="card-title">Starter</h5>
      <p className="card-text">For small businesses wanting to increase engagement and drive traffic to their website.</p>
      <a href="{Details}" className="btn " >Starts from <span className='price'>5999/-</span></a>
      
    </div>
  </div>
  <div className="card growth" id='growth' >
  {/* onClick={growthf} */}
    <div className="card-body">
      <h5 className="card-title">Growth</h5>
      <p className="card-text">For growing social media teams with a focus on driving traffic and sales.</p>
      <a href="{Details}" className="btn " >Starts from <span className='price'>9999/-</span></a>
    </div>
  </div>
  <div className="card advanced" id='advance'>
  {/* onClick={advancedf} */}
    <div className="card-body">
      <h5 className="card-title">Advanced</h5>
      <p className="card-text">For large social teams and agencies managing multiple brands for max growth.</p>
      <a href="{Details}" className="btn "  >Starts from <span className='price'>14999/-</span></a>
    </div>
  </div>
</div>


<div  id='modalbox' class="modal-content modalbox">
  <div class="modal-header">
    <span class="close">&times;</span>
    <h2>Starter Plan</h2>
  </div>
  <div class="modal-body">
  <ul>
<li>Handling Facebook and Instagram accounts. </li>
<li>3 Post in a week provided by Client.</li>
<li>50-100 followers on each post organic+inorganic. </li>
<li>100-150 likes on each post. </li>
<li>1 boost post free.</li>
<li>Free post editing.</li>
    </ul>
  </div>
  <div class="modal-footer">
    {/* <button onClick={close}>Close</button> */}
  </div>

</div>

{/* <div className="startpopup " id='starter-popup'>
  <h2 className='popup-heading'>Starter Plan</h2>
  <div className='detail'>
    <ul>
<li>Handling Facebook and Instagram accounts. </li>
<li>3 Post in a week provided by Client.</li>
<li>50-100 followers on each post organic+inorganic. </li>
<li>100-150 likes on each post. </li>
<li>1 boost post free.</li>
<li>Free post editing.</li>
    </ul>
    <button className='popup-button' onClick={closePopupStart}>OK</button>
</div>
</div>


<div className="growthpopup " id='growth-popup'>
  <h2 className='popup-heading'>Growth Plan</h2>
  <div className='detail'>
    <ul>
<li>Handling Facebook,Instagram and Youtube.</li> 
<li>5 post in a week. </li>
<li>1 Youtube Video. </li>
<li>30-50 subscriber per video.</li>
<li>100-200 followers on each post.</li> 
<li>150-250 likes on each post. </li>
<li>4 boost post free.</li>
<li>2 are on targeted audience. </li>
<li>2 public  boost.</li>
<li>Free post and video editing.</li>

    </ul>
    <button className='popup-button' onClick={closePopupGrowth}>OK</button>
</div>
</div>

<div className="advancedpopup " id='advanced-popup'>
  <h2 className='popup-heading'>Advanced Plan</h2>
  <div className='detail'>
    <ul>
    <li>Plus </li>
<li>2 video for YouTube.</li>
<li>10 YT shorts+Reels.</li>
<li>Post Creation by photoshoot. </li>
<li>8 specific audience post boost. </li>
<li>4 general audience post book on both Facebook and Instagram. </li>
<li>Insights and growth review would be send to clients. </li>
<li>Personal suggestion and market need would be suggested (R&D).</li>
<li>100/- per post(including You-tube shorts and Reels).</li>
<li>200/- per video. </li>
    </ul>
    <button className='popup-button' onClick={closePopupAdvanced} >OK</button>
</div>
</div> */}





</div>
   </>
            )
}