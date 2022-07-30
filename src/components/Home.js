import React from 'react';
import './index.css';
// import { BrowserRouter as Router, Link} from 'react-router-dom';
// import Services from './Services/Services';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Smpage from './Smpage/Smpage';
import Working from './Working/Working';
export default function Home(props) {
    return (
      <div className='Homepage'>
<Navbar />
<div className='home'>

<div className='home-content'>  
<p className='subtext'>Lift your social-media presence </p>
<p className='subtext-1'> with </p>

<h1 className='main-heading'> Social-Hoist</h1>
</div>
</div>

<Smpage/>
   <Working/>
{/* <Services/> */}
</div>

    )
}
