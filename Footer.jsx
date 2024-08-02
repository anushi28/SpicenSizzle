import React from 'react'
import './Footer.css'

import { FaFacebook, FaTwitter,FaInstagram, FaLinkedin} from "react-icons/fa";
import Body from './Body';

import { IoCallOutline } from "react-icons/io5";



export const Footer = () => {
    let element = [
        {Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RmDXaC09vEZI5Z-IwPlckJ4DE-LfTbMw-w&s" , Title : "ADDRESS", Description: "395 Truro Heights Rd, Truro Heights, NS B6L 1X7, Canada"},
        {Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmTSdwx7aEKX5HoBTvAlYubZ9bIOpysS0gA&s" , Title : "EMAIL", Description: "hello@gmail.com  support@company.com"  }
        

    ]
  return (
    <>
    <div className='footerhead' id='footer'>
        <h1>CONTACT US</h1>
        <span>we align leaders around shared purpose and strategic story that catylyses buiseness <br></br> and brand to take action.</span>
        </div>
    <div className='container'>
        <div className='blackbox'>
            <div className='smallbox'>
                {element.map((ele)=>{
                    return <Body Image = {ele.Image} Title = {ele.Title} Description = {ele.Description}/>
                })}


            </div>

            <div className='anotherbox'>
                <Body  Image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCplCxpRsDlTc3ummP8eFuR3Og_5koPNugA&s" Title = "CALL US:" Description = "1(234)567491  1(234)987453"/>
<div className='social'>
<h4>SOCIAL MEDIA</h4> <br></br>
<p>Follow our social handlers</p><br></br>

<a href=''><FaFacebook/></a>&nbsp;
<a href=''><FaTwitter/></a>&nbsp;
<a href=''><FaInstagram/></a>&nbsp;
<a href=''><IoCallOutline/></a>&nbsp;
<a href="https://www.linkedin.com/in/anushi-jain-3aa473275/" ><FaLinkedin/></a>





</div>

                

            </div>



          
        

     


        </div>

        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.9168198530115!2d-63.32022458846998!3d45.350491340898174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b594f8e4dea8013%3A0x5b7137e2480181fe!2s395%20Truro%20Heights%20Rd%2C%20Truro%20Heights%2C%20NS%20B6L%201X7%2C%20Canada!5e0!3m2!1sen!2sin!4v1717820175101!5m2!1sen!2sin" width="600" height="450"  allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

   
   
    </div>

    
   

    </div>
  
        
    </>
  )
}
