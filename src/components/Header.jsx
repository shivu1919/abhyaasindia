import React, { useState } from 'react'
import {Link} from "react-router-dom"
import './Header.css'

function Header() {


    const[screen,setScreen] = useState('large')
    const[menIcon, setMenuIcon] = useState('/icons/menu-bar.png')

  return (
    <>
        
            <div id='header-main'>
                <div>
                    <img src="/ai_logo.jpg" width="50" style={{background:"transparent"}}/>
                </div>

                <div id="link-div">
                    <Link id="header-links" to="/">Home</Link>
                    <Link id="header-links" to="/">Services</Link>
                    <Link id="header-links" to="/">About</Link>
                    <Link id="header-links" to="/">Contact</Link>
                </div>

                <div style={{backgroundColor:"red",padding:"6px",borderRadius:"12px",cursor:"pointer"}} id="header-call-div">
                    <div style={{display:"flex",alignItems:"center",columnGap:"5px"}}>
                        <img src="/icons/phone-call.png" width="30"/>
                        <p style={{fontSize:"18px",color:"white",fontWeight:"500"}}>8630444460</p>
                    </div>
                </div>

                <div id="header-menu-bar" onClick={()=>{
                    if(screen=='large'){
                        setScreen('small')
                        setMenuIcon('/icons/close.png')
                    }

                    else{
                        setScreen('large')
                        setMenuIcon("/icons/menu-bar.png")
                    }
                }}>
                    <img src={menIcon} width="40"/>
                </div>
            </div>

            <br/><br/><br/>

            <div id={screen}>
                    
                        <Link id="header-links" to="/">Home</Link>
                        <Link id="header-links" to="/">Services</Link>
                        <Link id="header-links" to="/">About</Link>
                        <Link id="header-links" to="/">Contact</Link>

                    <div style={{backgroundColor:"red",padding:"6px",borderRadius:"12px",cursor:"pointer"}}>
                        <div style={{display:"flex",alignItems:"center",columnGap:"5px"}}>
                            <img src="/icons/phone-call.png" width="30"/>
                            <p style={{fontSize:"18px",color:"white",fontWeight:"500"}}>8630444460</p>
                        </div>
                    </div> 
                    
            </div>
        
    </>
  )
}

export default Header