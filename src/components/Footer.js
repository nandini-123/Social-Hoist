import React from 'react';
import './footer.css';
export default function Footer(props) {
    return (
        // const insta = '/images/instagram.png' ;

     <>

<div className='footer'>

    <ul>
        <li><a href=""><img src="./images/instagram.png" alt="" /></a></li>
        <li><a href=""><img src="./images/facebook.png" alt="" /></a></li>
        <li><a href=""><img src="./images/linkedin.png" alt="" /></a></li>
        <li><a href=""><img src="./images/mail.png" alt="" /></a></li>
        <li><a href=""><img src="./images/twitter.png" alt="" /></a></li>


    </ul>
    <p className='copyright'>Copyright@.All Rights Reserved</p>
</div>

     </>

    )
}
