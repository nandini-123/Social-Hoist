import React from 'react';
import './footer.css';
export default function Footer(props) {
    const {instaimg , linkedinimg, fbimg, emailimg ,twitterimg} = props
    return (
        // const insta = '/images/instagram.png' ;

     <>

<div className='footer'>

    <ul>
        <li><a href="/"><img src={require('../images/linkedin.png')} alt="Linkedin" /></a></li>
        <li><a href="/"><img src={require('../images/facebook.png')} alt="facebook" /></a></li>
        <li><a href="/"><img src={require('../images/instagram.png')} alt="instagram" /></a></li>
        <li><a href="/"><img src={require('../images/mail.png')} alt="email" /></a></li>
        <li><a href="/"><img src={require('../images/twitter.png')} alt="Twitter" /></a></li>


    </ul>
    <p className='copyright'>Copyright@.All Rights Reserved</p>
</div>

     </>

    )
    Footer.defaultProps={
        instaimg:"/public/images/instagram.png",
        linkedinimg:"/public/images/linkedin.png",
        fbimg:"/public/images/facebook.png",
        emailimg:"/public/images/mail.png",
        twitterimg:"/public/images/twitter.png",
    }
}
