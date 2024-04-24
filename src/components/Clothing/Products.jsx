import React,{useState,useEffect} from 'react'

import Cloth from './Clothes/Cloth'
import Main from './Main/Main'
import {ClothesData} from './Clothes/Data'
import Loader from '../loader/Loader'
import { Footer, Navbar } from '../Index';

const Products = () => {
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
<Main/>
<div style={{ backgroundColor:'#f2f3f7'}}>

  <Cloth ClothesData={ClothesData} />

</div>
<Footer/>
</>}
</>
    )
}

export default Products