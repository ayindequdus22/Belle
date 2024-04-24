import React,{useState,useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from './logo.svg'
const Links = () => {
  const [visible,setVisible] = useState(false)
  const [navState, setNavState] = useState(false);

  const onNavScroll = ({count}) => {  
    if(window.scrollY > 150) {
        setNavState(true);
    } else {
        setNavState(false);
    }
}
useEffect(() => {
    window.addEventListener('scroll', onNavScroll

    );
    return () => {
        window.removeEventListener('scroll', onNavScroll);
    }
},[]);

  return (
   <>
  
    <div className= {!navState ? ' flex_b nav':' flex_b nav active'}>
<div className="fa fa-bars importantIcon" onClick={()=>{setVisible(true)}}></div>
<NavLink to='/'>
   <img src={logo} alt="" />
</NavLink>
   
    <div className={visible ?"links flex_c active" :"links flex_c"}>
    <NavLink to='/' >Home</NavLink>
    <NavLink to='/products'>Products</NavLink>

    <NavLink to='/blog' className='blogLink'>Blog</NavLink>
    <NavLink to='/contact' >Contact</NavLink>
    <div className="fa fa-times importantIcon" onClick={()=>{setVisible(false)}}></div>
    </div>
  <div className="icons">
    <Link to='/cart'>
    <div className="fa fa-shopping-cart" style={{position:'relative'}}>
      <span className='cartNo'>0</span>
    </div>
    </Link>
    <div className="fa fa-search"></div>
  </div>
   </div> 
    
   
   </>
  )
}

export default Links