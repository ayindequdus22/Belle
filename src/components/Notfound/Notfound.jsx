import React from 'react'
import './Notfound.css'
import { Navbar,Footer } from '../Index'
import bg from '../../image/banner/4 copy.jpg'
const Notfound = () => {
  return (
    <>
    <Navbar/>
<div id="notfound">
  <img src={bg} alt="" />
    <div className="notfound">
      <div className="notfound-404">
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
      <a href="#report">Report</a>
      <a href="/">Homepage</a>
    </div>
  </div>
  <Footer/>
   </> )
}

export default Notfound