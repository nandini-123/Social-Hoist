import React from 'react'
import './working.css';
export default function Working(props) {
    return (
     <>

<div className="working">

    <div className="head">
        <h3 className='working-heading'>How it Works</h3>
    </div>

    <div class="container text-center columns-steps">
  <div class="row">
    <div class="col step-1">
    <p style={{'font-weight':'thin'}}> Step 1</p>
    <p className='steps-content-1'>Know your requirement.</p>
    <p><img  className='ima' src="circle1.png" alt="" /></p>
    </div>
    <div class="col step-2">
      <p style={{'font-weight':'bold'}}> Step 2</p>
      <p className='steps-content-2'>Discuss and find best solution for growing your business.</p>
   <p> <img  className='ima' src="/public/images/circle.png" alt="" /></p> 

    </div>
    <div class="col step-3">
      <p style={{'font-weight':'bolder'}}> Step 3</p>
      <p className='steps-content-3'>In final step, we execute your project and record the data and apply our skills to grow you socially.</p>
    <img  className='ima' src="public/images/circle1.png" alt="" />

    </div>
  </div>
</div>

</div>
     </>

    )
}
