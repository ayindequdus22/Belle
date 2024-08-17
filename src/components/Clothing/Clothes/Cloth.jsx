import React,{useState} from 'react'

import Loader from '../../loader/Loader';
import './Cloth.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../utils/cartSlice';

const Cloth = ({ClothesData:{data}}) => {
  const [page,setPage] = useState(8)
const [loading,setLoading] = useState(false)

const loader = ()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },2000)
}
const dispatch = useDispatch()


  return (
   <>
   <div className="pads">
      <div id="clothesProducts">
   <h3>Our Clothing Accessories</h3>
   <div className="filter" >
    <form action="" className="search flex_c">
      <div className="fa fa-search flex_c"></div>
    <input type="search" name="" id="" placeholder='Search' />
    </form>

    <div className="sorts">
      <p>Sort by:</p>
      <select name="" id="select">
        <option value="Position">Position</option>
  <option value="Price:Lowest first">Price:Lowest first</option>  
<option value="Price:Highest first">Price:HIghest first</option>
<option value="Product Name:A to Z">Product Name:A to Z </option>

      </select>
    </div>
   </div>
   {loading ?
<Loader/>
  :
    <div className="ClothesContainer flex_wrap">
    {data.slice(0,page).map((val)=>(
      <div className="cloth" key={val.id}>
        <div className="img">
          <img src={val.ima} alt={val.id} />
        </div>
        <div className="content flex_d">
       <p style={{padding:'1rem 0 .5rem'}}>{val.name}</p>
          <p style={{color:'var(--primary-color)',fontWeight:'600'}}>${val.price}</p>
          <button className="btn Imp" onClick={()=>{
            dispatch(addToCart(val))
          }}>Add to Cart</button>
        </div>
      </div>
    ))}
   </div> 
    }

   </div> 
      <div className="pagination flex_c" >
    <div className="fa fa-chevron-left" onClick={()=>{
  loader()  
   if(page === 8){
        alert(`You are caught up in our feed`)
      }
      else{
        setPage(page -4)
      }
    }}></div>
    <div onClick={(e)=>{setPage(8) 
   loader()
 
    }}>1</div>
  <div onClick={()=>{setPage(16) 
  loader()
  }}>2</div>
  <div onClick={()=>{setPage(24)
    loader()}}>3</div>  
  <div onClick={()=>{setPage(32)
    loader()}}>4</div>
  <div onClick={()=>{setPage(40)
    loader()
  }}>5</div>
  <div className="fa fa-chevron-right"onClick={()=>{
        loader()
    if(page === 40){
        alert(`Come back later for new products`)
      }
      else{
        setPage(page + 4)
      }
    }}></div>
    </div>
   </div>
    
   </>
  )
}

export default Cloth