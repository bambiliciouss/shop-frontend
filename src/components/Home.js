// import React, { Fragment, useEffect , useState} from 'react'
// import MetaData from './layout/MetaData'
// import Loader from './layout/Loader'
// import Pagination from 'react-js-pagination'

// import Slider from 'rc-slider'
// import 'rc-slider/assets/index.css';
// import Product from './product/Product'
// import { useDispatch, useSelector } from 'react-redux'
// import { getProducts } from '../actions/productActions'
// import { useParams} from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const { createSliderWithTooltip } = Slider;
// const Range = createSliderWithTooltip(Slider.Range)

//     const Home = () => {
//       const [currentPage, setCurrentPage] = useState(1)
//       const [price, setPrice] = useState([1, 1000])
//       const [category, setCategory] = useState('')
//       // const [rating, setRating] = useState(0)

//       const categories = [
//         'Electronics',
//         'Cameras',
//         'Laptops',
//         'Accessories',
//         'Headphones',
//         'Food',
//         "Books",
//         'Clothes/Shoes',
//         'Beauty/Health',
//         'Sports',
//         'Outdoor',
//         'Home'
//     ]

//         const dispatch = useDispatch();

//         const { loading, products, error, productsCount, resPerPage, filteredProductsCount } = useSelector(state => state.products)

//         const notify = (error) => toast.error(error, {
//           position: toast.POSITION.BOTTOM_RIGHT
//       });

//         let { keyword } = useParams();
//         useEffect(() => {
//             // notify()
//             if (error) {
//                 // return alert.error(error)
//                 notify(error)
//             }
//             dispatch(getProducts(keyword, currentPage))
//         }, [dispatch, error, currentPage, keyword]);

//         function setCurrentPageNo(pageNumber) {
//           setCurrentPage(pageNumber)
//       }

//     let count = productsCount;
//     if (keyword) {
//         count = filteredProductsCount
//     }

//         return (
//           <Fragment>
//               {loading ? <Loader /> : (
//                   <Fragment>
//                       <MetaData title={'Buy Best Products Online'} />
//                       <h1 id="products_heading">Latest Products</h1>
//                       <section id="products" className="container mt-5">
//                           {/* <div className="row">
//                               {products && products.map(product => (
//                                   <Product key={product._id} product={product} />
//                               ))}
//                           </div> */}
//                           <div className="row">

//                               {keyword ? (
//                                   <Fragment>
//                                       <div className="col-6 col-md-3 mt-5 mb-5">
//                                           <div className="px-5">
//                                               <Range

//                                                   marks={{
//                                                       // 1: $1,
//                                                       // 1000: $1000
//                                                   }}
//                                                   min={1}
//                                                   max={1000}
//                                                   defaultValue={[1, 1000]}
//                                                   tipFormatter={value => `$${value}`}
//                                                   tipProps={{
//                                                       placement: "top",
//                                                       visible: true
//                                                   }}
//                                                   value={price}
//                                                   onChange={price => setPrice(price)}
//                                               />
//                                               <hr className="my-5" />
//                                               <div className="mt-5">
//                                                   <h4 className="mb-3">
//                                                       Categories
//                                                   </h4>
//                                                   <ul className="pl-0">
//                                                       {categories.map(category => (
//                                                           <li
//                                                               style={{
//                                                                   cursor: 'pointer',
//                                                                   listStyleType: 'none'
//                                                               }}
//                                                               key={category}
//                                                               onClick={() => setCategory(category)}
//                                                           >
//                                                               {category}
//                                                           </li>
//                                                       ))}
//                                                   </ul>
//                                               </div>
//                                           </div>
//                                       </div>

//                                       <div className="col-6 col-md-9">
//                                           <div className="row">
//                                               {products.map(product => (
//                                                   <Product key={product._id} product={product} col={4} />
//                                               ))}
//                                           </div>
//                                       </div>
//                                   </Fragment>
//                               ) : (
//                                   products.map(product => (
//                                       <Product key={product._id} product={product} col={3} />
//                                   ))
//                               )}

//                           </div>

//                       </section>
//                       {resPerPage <= count && (
//                           <div className="d-flex justify-content-center mt-5">
//                               <Pagination
//                                   activePage={currentPage}
//                                   itemsCountPerPage={resPerPage}
//                                   totalItemsCount={productsCount}
//                                   onChange={setCurrentPageNo}
//                                   nextPageText={'Next'}
//                                   prevPageText={'Prev'}
//                                   firstPageText={'First'}
//                                   lastPageText={'Last'}
//                                   itemClass="page-item"
//                                   linkClass="page-link"
//                               />
//                           </div>
//                       )}
//                   </Fragment>
//               )
//               }
//           </Fragment>

//       );
//         }

// export default Home

//WORKINGGGGGGG
//============================
// import React, { Fragment, useEffect, useState } from "react";
// import MetaData from "./layout/MetaData";
// import Product from "./product/Product";
// import Loader from "./layout/Loader";
// import { useParams } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import { Link } from "react-router-dom";
// import Pagination from "react-js-pagination";
// import Slider, { Range, createSliderWithTooltip } from "rc-slider";
// import "rc-slider/assets/index.css";

// //

// const Home = ({ match }) => {
//   const dispatch = useDispatch();

//   const createSliderWithToolTip = Slider.createSliderWithToolTip;
//   const Range = createSliderWithTooltip(Slider.Range);
//   const [price, setPrice] = useState([1, 1000]);
//   const [category, setCategory] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const categories = [
//     "Electronics",
//     "Cameras",
//     "Laptops",
//     "Accessories",
//     "Headphones",
//     "Food",
//     "Books",
//     "Clothes/Shoes",
//     "Beauty/Health",
//     "Sports",
//     "Outdoor",
//     "Home",
//   ];

//   const {
//     loading,
//     products,
//     error,
//     productsCount,
//     resPerPage,
//     filteredProductsCount,
//   } = useSelector((state) => state.products);

//   let { keyword } = useParams();

//   useEffect(() => {
//     dispatch(getProducts(keyword, currentPage, price, category));
//     if (error) {
//       return alert.error(error);
//     }
//   }, [dispatch, alert, error, keyword, price, currentPage, category]);

//   function setCurrentPageNo(pageNumber) {
//     setCurrentPage(pageNumber);
//   }

//   let count = productsCount;
//   if (keyword) {
//     count = filteredProductsCount;
//   }

//   console.log(keyword);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title={"Buy Best Products Online"} />
//           <h1 id="products_heading">Latest Products</h1>
//           <section id="products" className="container mt-5">
//             {/* <div className="row">
//                         {products && products.map(product => (
//                             <Product key={product._id} product={product} />
//                         ))}
//                     </div> */}
//             <div className="row">
//               {keyword ? (
//                 <Fragment>
//                   <div className="col-6 col-md-3 mt-5 mb-5">
//                     <div className="px-5">
//                       <Range
//                         marks={{
//                           1: `$1`,
//                           1000: `$1000`,
//                         }}
//                         min={1}
//                         max={1000}
//                         defaultValue={[1, 1000]}
//                         tipFormatter={(value) => `$${value}`}
//                         tipProps={{
//                           placement: "top",
//                           visible: true,
//                         }}
//                         value={price}
//                         onChange={(price) => setPrice(price)}
//                       />
//                       <hr className="my-5" />
//                       <div className="mt-5">
//                         <h4 className="mb-3">Categories</h4>
//                         <ul className="pl-0">
//                           {categories &&
//                             categories.map((category) => (
//                               <li
//                                 style={{
//                                   cursor: "pointer",
//                                   listStyleType: "none",
//                                 }}
//                                 key={category}
//                                 onClick={() => setCategory(category)}
//                               >
//                                 {category}
//                               </li>
//                             ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-6 col-md-9">
//                     <div className="row">
//                       {products &&
//                         products.map((product) => (
//                           <Product
//                             key={product._id}
//                             product={product}
//                             col={4}
//                           />
//                         ))}
//                     </div>
//                   </div>
//                 </Fragment>
//               ) : (
//                 products &&
//                 products.map((product) => (
//                   <Product key={product._id} product={product} col={3} />
//                 ))
//               )}
//             </div>
//           </section>
//           {resPerPage <= count && (
//             <div className="d-flex justify-content-center mt-5">
//               <Pagination
//                 activePage={currentPage}
//                 itemsCountPerPage={resPerPage}
//                 totalItemsCount={productsCount}
//                 onChange={setCurrentPageNo}
//                 nextPageText={"Next"}
//                 prevPageText={"Prev"}
//                 firstPageText={"First"}
//                 lastPageText={"Last"}
//                 itemClass="page-item"
//                 linkClass="page-link"
//               />
//             </div>
//           )}
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default Home;

//==========================================

//pagination

// import React, { Fragment, useEffect, useState } from "react";
// import MetaData from "./layout/MetaData";
// import Loader from "./layout/Loader";
// import Pagination from "react-js-pagination";

// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import { useParams } from "react-router-dom";

// //

// const Home = () => {
//     const dispatch = useDispatch();
//     const [currentPage, setCurrentPage] = useState(1);
//   const {
//     loading,
//     products,
//     error,
//     productsCount,
//     resPerPage,
//     filteredProductsCount,
//   } = useSelector((state) => state.products);

//   let { keyword } = useParams();

//   useEffect(() => {
//     dispatch(getProducts(keyword, currentPage));
//     if (error) {
//       return alert.error(error);
//     }
//   }, [dispatch, alert, error, keyword, currentPage]);

//   function setCurrentPageNo(pageNumber) {
//     setCurrentPage(pageNumber);
//   }

//   let count = productsCount;
//   if (keyword) {
//     count = filteredProductsCount;
//   }

//   console.log(keyword);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title={"Buy Best Products Online"} />
//           <h1 id="products_heading">Latest Products</h1>

//           {resPerPage <= count && (
//             <div className="d-flex justify-content-center mt-5">
//               <Pagination
//                 activePage={currentPage}
//                 itemsCountPerPage={resPerPage}
//                 totalItemsCount={productsCount}
//                 onChange={setCurrentPageNo}
//                 nextPageText={"Next"}
//                 prevPageText={"Prev"}
//                 firstPageText={"First"}
//                 lastPageText={"Last"}
//                 itemClass="page-item"
//                 linkClass="page-link"
//               />
//             </div>
//           )}
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default Home;

import React, { Fragment, useEffect, useState } from "react";
import MetaData from "./layout/MetaData";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../actions/productActions";
import Product from "./product/Product";
import Loader from "./layout/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const {
    loading,
    products,
    error,
    productsCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState("");
  let { keyword } = useParams();

  const notify = (error = "") =>
    toast.error(error, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);
  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Food",
    "Books",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ];

  useEffect(() => {
    if (error) {
      // return alert.error(error)
      notify(error);
    }
    dispatch(getProducts(keyword, currentPage, price, category));
  }, [dispatch, error, currentPage, keyword, price, category]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }
  let count = productsCount;

  if (keyword) {
    let count = filteredProductsCount;
  }
  console.log(keyword, count, filteredProductsCount, resPerPage);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Buy Best Products Online"} />
          <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">
            {/* <div className="row">
                            {products && products.map(product => (
                                <Product key={product._id} product={product} />
                            ))}
                        </div> */}
            <div className="row">
              {keyword ? (
                <Fragment>
                  <div className="col-6 col-md-3 mt-5 mb-5">
                    <div className="px-5">
                      <Range
                        marks={{
                          1: `$1`,
                          1000: `$1000`,
                        }}
                        min={1}
                        max={1000}
                        defaultValue={[1, 1000]}
                        tipFormatter={(value) => `$${value}`}
                        tipProps={{
                          placement: "top",
                          visible: true,
                        }}
                        value={price}
                        onChange={(price) => setPrice(price)}
                      />
                      <hr className="my-5" />
                      <div className="mt-5">
                        <h4 className="mb-3">Categories</h4>
                        <ul className="pl-0">
                          {categories.map((category) => (
                            <li
                              style={{
                                cursor: "pointer",
                                listStyleType: "none",
                              }}
                              key={category}
                              onClick={() => setCategory(category)}
                            >
                              {category}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-9">
                    <div className="row">
                      {products &&
                        products.map((product) => (
                          <Product
                            key={product._id}
                            product={product}
                            col={4}
                          />
                        ))}
                    </div>
                  </div>
                </Fragment>
              ) : (
                products &&
                products.map((product) => (
                  <Product key={product._id} product={product} col={3} />
                ))
              )}
            </div>
          </section>
          {resPerPage <= count && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
