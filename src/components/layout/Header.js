// import React, { Fragment } from 'react'
// import '../../App.css'

// const Header = () => {

//     return (
//         <Fragment>
//           <nav className="navbar row">
// 			      <div className="col-12 col-md-3">
// 			        <div className="navbar-brand">
// 			          <img src="./images/shopit_logo.png" />
// 			        </div>
// 			      </div>
// 		      <div className="col-12 col-md-6 mt-2 mt-md-0">
// 			        <div className="input-group">
// 			          <input
// 			            type="text"
// 			            id="search_field"
// 			            className="form-control"
// 			            placeholder="Enter Product Name ..."
// 			          />
// 			          <div className="input-group-append">
// 			            <button id="search_btn" className="btn">
// 			              <i className="fa fa-search" aria-hidden="true"></i>
// 			            </button>
// 			          </div>
// 			        </div>
// 			      </div>

// 			      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
// 			        <button className="btn" id="login_btn">Login</button>

// 			        <span id="cart" className="ml-3">Cart</span>
// 			        <span className="ml-1" id="cart_count">2</span>
// 			      </div>
// 			    </nav>
//         </Fragment>
//     )
// }

// export default Header

//WITH SEARCH
// import React, { Fragment } from 'react'
// import '../../App.css'

// import Search from './Search'

// import { Link } from "react-router-dom";

// const Header = () => {

//     return (
//         <Fragment>
//             <nav className="navbar row">
//                 <div className="col-12 col-md-3">
//                     <div className="navbar-brand">
//                         <img src="./images/shopit_logo.png" />
//                     </div>
//                 </div>
//                 <div className="col-12 col-md-6 mt-2 mt-md-0">
//                      <Search  />
//                 </div>

//                 <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
//                     {/* <button className="btn" id="login_btn">Login</button> */}
//                     <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>

//                     <span id="cart" className="ml-3">Cart</span>
//                     <span className="ml-1" id="cart_count">2</span>
//                 </div>
//             </nav>
//         </Fragment>
//     )
// }

// export default Header

//WITH LOGOUT

import React, { Fragment } from "react";
import "../../App.css";
import { Route, Link, Routes } from "react-router-dom";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import "../../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const notify = (message = "") =>
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  // const { cartItems } = useSelector(state => state.cart)

  const logoutHandler = () => {
    dispatch(logout());

    notify("Logged Out Successfully!!");
  };

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
              <img src="/images/shopit_logo.png" />
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Search />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <span id="cart" className="ml-3">
              Cart
            </span>

            {/*<span className="ml-1" id="cart_count">{cartItems.length}</span>*/}

            {/* <span className="ml-1" id="cart_count">
              2
            </span> */}
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>

          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white mr-4"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>

                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.role === "admin" && (
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                )}

                <Link className="dropdown-item" to="/orders/me">
                  Orders
                </Link>

                <Link className="dropdown-item" to="/me">
                  Profile
                </Link>

                {/*<Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>*/}

                <Link
                  className="dropdown-item text-danger"
                  to="/"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link to="/login" className="btn ml-4" id="login_btn">
                Login
              </Link>
            )
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
