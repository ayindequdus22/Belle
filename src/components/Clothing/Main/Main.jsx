import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import bg from '../../../image/productbanner/slide-img-4.jpg'
import bg2 from '../../../image/productbanner/slider0.jpg'

import './Main.css'
const Main = () => {
    return (
        <>
            <div className="clotheSlide">
                <Slider>
                    <div className='ClothingMain'>
                        <div className="image">
                            <img src={bg} alt="" />
                        </div>
                        <div className="content flex_d">
                            <p >Home <div className="fa fa-chevron-right"></div> <span>Products</span></p>
                            <h1>Favourite Clothing From Belle</h1>
                            <div>
                                <a href="#clothesProducts" className="btn flex_c" >See More</a>

                            </div>
                        </div>
                    </div>
                    <div className='ClothingMain'>
                        <div className="image">
                            <img src={bg2} alt="" />
                        </div>
                        <div className="content flex_d">
                            <div >Home <div className="fa fa-chevron-right"></div> <span>Products</span></div>
                            <h1>Favourite Shoes From Belle</h1>
                            <div>
                                <a href="#clothesProducts" className="btn flex_c" >See More</a>

                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Main