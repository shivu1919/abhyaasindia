import React from 'react'
import Header from '../components/Header'
import '../css/Home.css'

function Home() {
  return (
    <>
        
        <Header/>
        <br/>
        <div id='home-first'>
                <h1 id='heading1'>Welcome To</h1>
                <h1 id='heading2'>AbhyaasIndia</h1>
        </div>

        <div id='home-second'>
           <div id='home-second-child'>
              <p>Web Development</p>
           </div>

           <div id='home-second-child'>
              <p>App Development</p>
           </div>

           <div id='home-second-child'>
              <p>UI / UX Design</p>
           </div>

           <div id='home-second-child'>
              <p>Custom E-commerce solution</p>
           </div>

           <div id='home-second-child'>
              <p>Reseach & Planning</p>
           </div>
        </div>


    </>
  )
}

export default Home