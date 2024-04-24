import React,{useState,useEffect} from 'react'
import './Blog.css'
import {BlogData} from './BlogData'
import Loader from '../loader/Loader'
import { Footer, Navbar } from '../Index';

const Blog = () => {
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
   setLoading(true)
   setTimeout(()=>{
     setLoading(false)
   },2000)
  },[])
  return (
   <>
 {loading ?
 <Loader/>
 :
   <>
   <Navbar/>
<div className="blog">
  <h3>My Blog</h3>
  <p >Home <div className="fa fa-chevron-right"></div> <span>Blog</span></p>
<div className="blogItems">
{
BlogData.map((value,key)=>(
  <div key={key} className="blogItem1">  
    <div className="image">
      <img src={value.img} alt="" />
</div>
<div className="content">
 <a href='#'>{value.title}</a>
 <h6>{value.heading}</h6>
 <p>By Mr Opeyemi Qudus Ayinde / {value.date}</p>
</div>

  </div>
))
}
</div>
</div>
<Footer/>
   </>
}
</>
  )
}

export default Blog