
import React from 'react'
import { Data } from '../Data'
import './Main.css'
const Main = () => {
  return (
    <>
    <div className="mySlideContainer scrollbar">
      {
Data.map((value,index)=>(
  <div className="slider" key={index}>
    <img src={value.image} alt="" />
    <div className="content">
      <h6>{value.trend}</h6>
      <h1>{value.text}</h1>
      <button className="btn">Shop Now</button>
    </div>
  </div>
)

)
}
    </div>
    </>
  )
}

export default Main