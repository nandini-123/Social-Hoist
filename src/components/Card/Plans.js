import React, { useState } from 'react'
import './plans.css';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Card(props) {

  return (
    <>
    <Navbar/>
      <div className='plans'>
        <h3 className='heading '>Find your perfect plan</h3>
        <p className='subtitle'>Get Plus subscription and help from us</p>

        <div className="cards-div">
{/* STARTER-CARD */}
          <div className="card starter" id='starter' data-toggle="modal" data-target="#exampleModalStarter" >
            {/* onClick={starterf} */}
            <div className="card-body">
              <h5 className="card-title">Starter</h5>
              <p className="card-text">For small businesses wanting to increase engagement and drive traffic to their website.</p>
              <a href="" className="btn " data-toggle="modal" data-target="#exampleModal">Starts from <span className='price'>5999/-</span></a>

            </div>
          </div>
{/* GROWTH CARD */}
          <div className="card growth" id='growth' data-toggle="modal" data-target="#exampleModalGrowth">
            {/* onClick={growthf} */}
            <div className="card-body">
              <h5 className="card-title">Growth</h5>
              <p className="card-text">For growing social media teams with a focus on driving traffic and sales.</p>
              <a href="" className="btn " data-toggle="modal" data-target="#exampleModal">Starts from <span className='price'>9999/-</span></a>
            </div>
          </div>
{/*ADVANCED CARD*/}
          <div className="card advanced" id='advance' data-toggle="modal" data-target="#exampleModalAdvanced">
            {/* onClick={advancedf} */}
            <div className="card-body">
              <h5 className="card-title">Advanced</h5>
              <p className="card-text">For large social teams and agencies managing multiple brands for max growth.</p>
              <a href="" className="btn "  data-toggle="modal" data-target="#exampleModal">Starts from <span className='price'>14999/-</span></a>
            </div>
          </div>
        </div>

        </div>
        <Footer/>


 {/* STARTER-MODAL */}

        <div className="modal fade starter-modal" id="exampleModalStarter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel" style={{'fontSize':'2rem', "fontWeight":'bold' , "color": "seagreen"}}>Starter Plan</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul>
                  <li>Handling Facebook and Instagram accounts. </li>
                  <li>3 Post in a week provided by Client.</li>
                  <li>50-100 followers on each post organic+inorganic. </li>
                  <li>100-150 likes on each post. </li>
                  <li>1 boost post free.</li>
                  <li>Free post editing.</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn" data-dismiss="modal" style={{'fontSize':'1.5rem', "fontWeight":'bold' , "color": "black"}}>Close</button>
              </div>
            </div>
          </div>
        </div>
      


{/* GROWTH MODAL */}
      <div className="modal fade growth-modal" id="exampleModalGrowth" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"  style={{'fontSize':'2rem', "fontWeight":'bold' , "color": "seagreen"}}>Growth Plan</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ol>
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

              </ol>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn " data-dismiss="modal" style={{'fontSize':'1.5rem', "fontWeight":'bold' , "color": "black"}}>Close</button>
            </div>
          </div>
        </div>
      </div>

{/* ADVANCED MODAL */}

      <div className="modal fade advanced-modal" id="exampleModalAdvanced" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
        <div className="modal-dialog" role="document">
          <div className="modal-content" >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"  style={{'fontSize':'2rem', "fontWeight":'bold' , "color": "seagreen"}}>Advanced Plan</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer">
              <button type="button" className="btn " data-dismiss="modal"  style={{'fontSize':'1.5rem', "fontWeight":'bold' , "color": "black"}}>Close</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}