import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from './hook/useCart';

function Header(props) {
   const {totalPrice} = useCart();

   return (
      <header className="d-flex justify-between align-center p-40">
         <Link to="/react-sneakers">
            <div className="headerLeft d-flex align-center">
               <img width={40} height={40} src={process.env.PUBLIC_URL + '/image/logo.svg'} alt="logo_img" />
               <div className="headerInfo">
                  <h3 className="text-uppercase">React Sneakers</h3>
                  <p>Магазин лучших кроссовок</p>
               </div>
            </div>
         </Link>

         <ul className="d-flex">
            <li onClick={props.onClickCart} className="mr-30 cu-p" >
               <img width={18} height={18} src={process.env.PUBLIC_URL + '/image/cart.svg'} alt="cart_icon" />
               <span>{totalPrice} руб.</span>
            </li>
            <li>
               <Link to="favorites">
                  <img className="mr-30 cu-p" width={18} height={18} src={process.env.PUBLIC_URL + '/image/like.svg'} alt="like_icon" />
               </Link>
            </li>
            <li>
               <Link to="orders">
                  <img width={18} height={18} src={process.env.PUBLIC_URL + '/image/user.svg'} alt="user_icon" />
               </Link>
            </li>
         </ul>
      </header>
   );
}

export default Header;