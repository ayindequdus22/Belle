import React from 'react'
import { Link } from 'react-router-dom'

import './Overview.css'
const Overview = ({ItemOverview:{items, Rtitle,title,classes}}) => {
  return (
<>

<div className="itemOverView ">
    <h3>{title}</h3>
<div className={classes + " itemContainer flex_wrap"}>
      {items.slice(0,6).map((value,index)=>(
<div key={index} className="items">
    <div className="image">
        <picture>
            <img src={value.Item} alt={value.name} />
        </picture>
        <div className="content">
<h6>{value.name}</h6>
<p style={{padding:' 1rem 0'}}>{value.price}</p>
<Link to={ '/products'}>
<button className="btn" style={{width:'10rem',height:'3rem'}}>See More</button>
      </Link>
        </div>
    </div>
</div>
    ))}
</div>
  
</div>
</>
    )
}

export default Overview