import React from 'react'

import Cloth from './Clothes/Cloth'
import Main from './Main/Main'
import { ClothesData } from './Clothes/Data'
import { Footer, Navbar } from '../Index';

const Products = () => {

  return (
    <>

      <Main />
      <div style={{ backgroundColor: '#f2f3f7' }}>

        <Cloth ClothesData={ClothesData} />

      </div>
      <Footer />
    </>
  )
}

export default Products