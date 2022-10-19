import React from 'react';
import axios from 'axios';

import Info from './info';
import { AppContext } from '../App';

function Drawer({onClose, onRemove ,items = [] }) {
   const [isOrderComplete, setIsOrderComplete] = React.useState(false);
   const [orderId, setOrderId] = React.useState(null);
   const {cartItems, setCartItems} = React.useContext(AppContext);
   const [isLoading, setIsLoading] = React.useState(false);

   const onClickOrder = async () => {
      try {
         setIsLoading(true);
         const {data} = await axios.post('https://63397af866857f698fb6abf7.mockapi.io/orders', {items: cartItems});
         setOrderId(data.id);
         setIsOrderComplete(true);
         setCartItems([]);
      } catch (error) {
         alert('Ошибка при создании заказа');
      }
      setIsLoading(false);
   }

   return (
      <div className="overlay">
         <div className="drawer">
            <h2 className="d-flex justify-between mb-30">
               Корзина
               <img onClick={onClose} className="removeBtn cu-p" src="/image/btn-remove.svg" alt="btn_remove_icon" />
            </h2>

            {
               items.length > 0 ? (
               <div className="d-flex flex-column flex">
                  <div className="items">
                     {items.map((obj) => (
                        <div className="cart_item d-flex align-center mb-20">
                           <div style={{backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                           <div className="mr-20 flex">
                              <p className="mb-5">{obj.model}</p>
                              <p>{obj.price} руб.</p>
                           </div>
                           <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/image/btn-remove.svg" alt="btn_remove_icon" />
                        </div>
                     ))}
                  </div>
                  <div className="cartTotalBlock">
                     <ul className="cartTotalBlock">
                        <li className="d-flex">
                           <span>Итого:</span>
                           <div></div>
                           <b>21 498 руб.</b>
                        </li>
                        <li className="d-flex">
                           <span>Налог 5%</span>
                           <div></div>
                           <b>1074 руб.</b>
                        </li>
                     </ul>
                     <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/image/arrow.svg" alt="arrow_icon" /></button>
                  </div>
               </div>
               ) : (
               <Info
                  title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                  image={isOrderComplete ? "./image/complete-order.jpg" : "./image/cart-empty.jpg"}
                  description={isOrderComplete ? `Ваш заказ №${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"} 
               />)
            }
         </div>
      </div>
   );
}

export default Drawer;