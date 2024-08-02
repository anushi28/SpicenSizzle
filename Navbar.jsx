import React, { useState } from 'react'
import { assests } from '../../assests/assests'
import './Navbar.css'



export const Navbar = () => {
  const [menu,setMenu] = useState("home")
  return (
   <>
   <div className='navbar' >
   
   <a href='#header'><img src={assests.logo2} alt="" className="logo2" /></a>
   
  <ul className='navbar-menu'>
    <li  onClick={()=>setMenu("home")}  className={`${menu === "home"? "active" : " "} `}>Home</li>
    <a href='#about' onClick={()=>setMenu("mob-app")} className={`${menu==="mob-app"?"active":""}`}>About</a>
<a href='#explore-menu' onClick={()=>setMenu("menu")} className={`${menu==="menu"?"active":""}`}>Menu</a>

<a href='#footer' onClick={()=>setMenu("contact")} className={`${menu==="contact"?"active":""}`}>Contact</a>

  </ul>
  <div className='navbar-right'>
  
<img src={assests.basket} alt="" />
  

  </div>

   </div>
  
   </>
  )
}
