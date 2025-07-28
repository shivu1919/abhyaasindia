import React, { useState } from 'react'
import {Link} from "react-router-dom"
import './Header.css'

function Header() {


    const[screen,setScreen] = useState('large')
    const[menuIcon, setMenuIcon] = useState('/icons/menu-bar.png')

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

                <div id='header-call-div' >
                    Contact Us
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
                    <img src={menuIcon} width="40"/>
                </div>
            </div>

            <br/><br/><br/>

            <div id={screen}>
                    
                        <Link id="header-links" to="/">Home</Link>
                        <Link id="header-links" to="/">Services</Link>
                        <Link id="header-links" to="/">About</Link>
                        <Link id="header-links" to="/">Contact</Link>     
            </div>
        
    </>
  )
}

export default Header