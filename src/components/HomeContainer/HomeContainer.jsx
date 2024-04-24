import React,{useState,useEffect} from 'react'
import Main from './Right/Main'
import './Home.css'
import Overview from './OverView/Overview'
import {ShoeOverview,ClothesOverview} from './OverView/Data'
import Loader from '../loader/Loader'
import { Navbar,Footer } from '../Index'
const HomeContainer = () => {
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
<div className='WholeContainer'>
<Main/>
<Overview ItemOverview={ShoeOverview}/>
<Overview ItemOverview={ClothesOverview}/>
  </div>
<Footer/>
</>}
</>
  )
}

export default HomeContainer







