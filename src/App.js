import './App.css';
import {useState,useEffect} from 'react'
import {Route,Routes } from 'react-router-dom'
import Products from './components/Clothing/Products';
import HomeContainer from './components/HomeContainer/HomeContainer';

import Notfound from './components//Notfound/Notfound';
import Blog from './components//Blog/Blog';
function App() {
  const [visible,setVisible]=useState(false);
  useEffect(()=>{
window.addEventListener("scroll",()=>{
 if(window.scrollY > 100){
    setVisible(true)
  }
  else if(window.scrollY <= 100){
    setVisible(false)
  } 
}) 

},[])
  return (
 <>

  <Routes>
      <Route path='/' element={<HomeContainer/>}/>
<Route path='/products' element={<Products/>}/>

<Route path='/blog' element={<Blog/>}/>
<Route path='*' element={<Notfound/>}/>
  </Routes>
  <div className='relativeIcons'>
<>
<div className={visible ? "fa fa-chevron-up active" : ""} onClick={()=>{window.scrollTo({top:0,left:0,behavior:'smooth'})}}></div>
<div className={visible ? "fa fa-chevron-down active": ""} onClick={()=>{window.scrollTo({top:document.documentElement.scrollHeight,behavior:'smooth'})}}></div>
</>

</div>

  </>
  );
}

export default App;
