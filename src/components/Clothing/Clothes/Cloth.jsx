import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Loader from '../../loader/Loader';
import './Cloth.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../utils/cartSlice';


const Cloth = ({ ClothesData: { data } }) => {
  const dispatch = useDispatch();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filter, setFilter] = useState("cloth")
  const itemsPerPage = 8;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));

  }, [itemOffset, itemsPerPage, data])
  // const [itemOffset, setItemOffset] = useState(0);
  // const [loading, setLoading] = useState(false);

  // const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = data.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(data.length / itemsPerPage);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % data.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  // const loader = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // };

              console.log(currentItems?.
                forEach((item) => item.price === 25.34

                  // item.name == "Men's Coat"
                )
              )
            
  return (
    <>
      <div className="pads">
        <div id="clothesProducts">
          <h3>Our Clothing Accessories</h3>
          <div className="filter">
            <form action="" className="search flex_c">
              <div className="fa fa-search flex_c"></div>
              <input type="search" name="" id="" placeholder="Search" />
            </form>

            <div className="sorts">
              <p>Sort by:</p>
              <select name="" id="select">
                <option value="Position">Position</option>
                <option value="Price:Lowest first">Price:Lowest first</option>
                <option value="Price:Highest first">Price:Highest first</option>
                <option value="Product Name:A to Z">Product Name:A to Z</option>
              </select>
            </div>
          </div>
          <div className="ClothesContainer flex_wrap" >
            
            {currentItems?.map((val) => (
              <div className="cloth" key={val.id}>
                <div className="img">
                  <img src={val.ima} alt={val.id} />
                </div>
                <div className="content flex_d">
                  <p style={{ padding: '1rem 0 .5rem' }}>{val.name}</p>
                  <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>
                    ${val.price?.toFixed(2)}
                  </p>
                  <button
                    className="btn Imp"
                    onClick={() => {
                      dispatch(addToCart(val));
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}


          </div>
          <ReactPaginate
            breakLabel="..."
            previousLabel={<div className="fa fa-chevron-left"></div>
            } pageClassName={"paginateClassName"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            nextLabel={<div className="fa fa-chevron-right"></div>}
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            activeClassName="paginateBtns active"
          />

        </div>
      </div>
    </>
  );
};

export default Cloth;



{/* <div className="pagination flex_c" >
          <div className="fa fa-chevron-left" onClick={() => {
            loader()
            if (page === 8) {
              alert(`You are caught up in our feed`)
            }
            else {
              setPage(page - 4)
            }
          }}></div>
          <div onClick={() => {
            setPage(8)
            loader()

          }}>1</div>
          <div onClick={() => {
            setPage(16)
            loader()
          }}>2</div>
          <div onClick={() => {
            setPage(24)
            loader()
          }}>3</div>
          <div onClick={() => {
            setPage(32)
            loader()
          }}>4</div>
          <div onClick={() => {
            setPage(40)
            loader()
          }}>5</div>
          <div className="fa fa-chevron-right" onClick={() => {
            loader()
            if (page === 40) {
              alert(`Come back later for new products`)
            }
            else {
              setPage(page + 4)
            }
          }}></div>
        </div> */}