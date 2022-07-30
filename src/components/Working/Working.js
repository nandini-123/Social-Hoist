import React from 'react'
import './working.css';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Working(props) {
    return (
     <>
<div className="working">

    <div className="head">
        <h3 className='working-heading'>How it Works</h3>
    </div>

    <div className="container text-center columns-steps">
  <div className="row">
    <div className="col step-1">
    <p style={{'fontWeight':'thin'}}> Step 1</p>
    <p className='steps-content-1'>Know your requirement.</p>
    <p><img  className='ima1' src={require('../images/black.png')} alt="" /></p>
    </div>
    <div className="col step-2">
      <p style={{'fontWeight':'bold'}}> Step 2</p>
      <p className='steps-content-2'>Discuss and find best solution for growing your business.</p>
   <p> <img  className='ima2' src={require('../images/black.png')} alt="" /></p> 

    </div>
    <div className="col step-3">
      <p style={{'fontWeight':'bolder'}}> Step 3</p>
      <p className='steps-content-3'>In final step, we execute your project and record the data and apply our skills to grow you socially.</p>
    <img  className='ima3' src={require('../images/black.png')} alt="" />

    </div>
  </div>
</div>

</div>
<Footer/>
     </>

    )
}
