import React , {useState , useEffect } from 'react'
import axios from 'axios'
import './message.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Message() {

const [name , setName] = useState("")
const [email , setEmail] = useState("")
const [contactno , setContactno] = useState("")
const [message , setMessage] = useState("")
const [list , setList] = useState([])
 const postingform = () => {
   
    axios.get('http://localhost:3000/details-1').then((res)=> console.log(res));
    axios.post('http://localhost:3000/details-1',{
      name:{name},
      contact:{contactno},
      email:{email},
      message:{message}
    }).then((data)=> console.log(data));
    
  //   fetch('http://localhost:3000/details-1' , {
  //     method:'Post',
  //     headers:{
  //       'Content-Type': 'application/json',
  //       'Accept':'application/json'
  //     } ,
  //     body: JSON.stringify(list)
  //   }).then((res)=>res.json()).then((data)=>{console.log(data)
  // setList(data)});

    // setName("")
    // setEmail("")
    // setContactno("")
    // setMessage("")


      }

// axios({
//     method: 'post',
//     url: './data.json',
//     data: {
//         name:{name}  ,
//         email:{email},
//           contact:{contactno},
//         message:{message}
//     }
//   });
  return (
    <>
    <Navbar/>

    <div className='message-component'>
<h2 className="heading-message">Want to Connect??</h2>
<p className='subtext-message'>Leave a message</p>
       <div className='forms'>
        <label htmlFor="label" style={{'clastextAlignsName':"left" ,'alignItems':'left', 'justifyContent':'left'}}> Name</label>    
        <input className='inputform' type="text" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="label" style={{'textAlign':"left" ,'alignItems':'left', 'justifyContent':'left'}}> E-mail</label>    
        <input className='inputform' type="email" value={email} placeholder="Enter your mail-id" onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="label" style={{'textAlign':"left" ,'alignItems':'left', 'justifyContent':'left'}}> Contact No.</label>    
        <input className='inputform' type="number" value={contactno} placeholder="Your Contact-no" onChange={(e)=>setContactno(e.target.value)}/>
        <label htmlFor="label" style={{'textAlign':"left" ,'alignItems':'left', 'justifyContent':'left'}}> Message</label>    
        <textarea className='inputform' type="textarea" value={message} placeholder="So what's the message hmm..??" onChange={(e)=>setMessage(e.target.value)}/>
        <button className='submitmsg' onClick={postingform}>Submit</button>
        </div>
    </div>
    <Footer/>
    </>
  )
}

