import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Loader from '../../loader/Loader';
import './Cloth.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../utils/cartSlice';

const Items = ({ currentItems }) => {
  const dispatch = useDispatch();

  return (
    <>
      {currentItems.map((val) => (
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
    </>
  );
};

const Cloth = ({ ClothesData: { data }, itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const loader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

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
          {loading ? (
            <Loader />
          ) : (
            <div className="ClothesContainer flex_wrap">
              <Items currentItems={currentItems} />
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                activeClassName="active"
              />
            </div>
          )}
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