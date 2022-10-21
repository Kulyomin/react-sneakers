import React from 'react';
import axios from 'axios';

import Info from '../info';
import { useCart } from '../hook/useCart';

import styles from './Drawer.module.scss';

function Drawer({onClose, onRemove ,items = [], opened }) {
   const {cartItems, setCartItems, totalPrice} = useCart();
   const [isOrderComplete, setIsOrderComplete] = React.useState(false);
   const [orderId, setOrderId] = React.useState(null);
   const [isLoading, setIsLoading] = React.useState(false);

   const onClickOrder = async () => {
      try {
         setIsLoading(true);
         const {data} = await axios.post('https://63397af866857f698fb6abf7.mockapi.io/orders', {items: cartItems});
         setOrderId(data.id);
         setIsOrderComplete(true);
         setCartItems([]);
         // Добавить очистку корзины на backend
      } catch (error) {
         alert('Ошибка при создании заказа');
      }
      setIsLoading(false);
   }

   return (
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
         <div className={styles.drawer}>
            <h2 className="d-flex justify-between mb-30">
               Корзина
               <img onClick={onClose} className="removeBtn cu-p" src="/image/btn-remove.svg" alt="btn_remove_icon" />
            </h2>

            {
               items.length > 0 ? (
               <div className="d-flex flex-column flex">
                  <div className={styles.items}>
                     {items.map((obj) => (
                        <div className={`${styles.cart_item} d-flex align-center mb-20`}>
                           <div style={{backgroundImage: `url(${obj.imageUrl})` }} className={styles.cartItemImg}></div>
                           <div className="mr-20 flex">
                              <p className="mb-5">{obj.model}</p>
                              <p>{obj.price} руб.</p>
                           </div>
                           <img onClick={() => onRemove(obj.id)} className={styles.removeBtn} src="/image/btn-remove.svg" alt="btn_remove_icon" />
                        </div>
                     ))}
                  </div>
                  <div className={styles.cartTotalBlock}>
                     <ul className={styles.cartTotalBlock}>
                        <li className="d-flex">
                           <span>Итого:</span>
                           <div></div>
                           <b>{totalPrice} руб.</b>
                        </li>
                        <li className="d-flex">
                           <span>Налог 5%</span>
                           <div></div>
                           <b>{Math.round(totalPrice / 100 * 5)} руб.</b>
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