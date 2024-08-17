import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from './logo.svg'
import { selectCartItems, selectTotalQTY, setGetTotals } from '../utils/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [navState, setNavState] = useState(false);


  const onNavScroll = () => {
    if (window.scrollY > 50) {
      setNavState(true)
    } else {
      setNavState(false);
    }

  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  const cartItems = useSelector(selectCartItems);
  const totalQTY = useSelector(selectTotalQTY);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setGetTotals())
  }, [cartItems, dispatch])

  return (
    <>

      <div className={`flex_b nav ${navState ? 'active' : ''}`}>
        <div className="fa fa-bars importantIcon" onClick={() => { setVisible(true) }}></div>
        <NavLink to='/'>
          <img src={logo} alt="" />
        </NavLink>

        <div className={visible ? "links flex_c active" : "links flex_c"}>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/products'>Products</NavLink>

          <NavLink to='/blog' className='blogLink'>Blog</NavLink>
          <NavLink to='/contact' >Contact</NavLink>
          <div className="fa fa-times importantIcon" onClick={() => { setVisible(false) }}></div>
        </div>
        <div className="icons">
          <Link to='/cart'>
            <div className="fa fa-shopping-cart" style={{ position: 'relative' }}>
              <span className='cartNo'>{totalQTY}</span>
            </div>
          </Link>
          <div className="fa fa-search"></div>
        </div>
      </div>


    </>
  )
}

export default Navbar