function Drawer({onClose, items = [] }) {
   return (
      <div className="overlay">
         <div className="drawer">
            <h2 className="d-flex justify-between mb-30">
               Корзина
               <img onClick={onClose} className="removeBtn cu-p" src="/image/btn-remove.svg" alt="btn_remove_icon" />
            </h2>
            <div className="items">
               {items.map((obj) => (
                  <div className="cart_item d-flex align-center mb-20">
                     <div style={{backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                     <div className="mr-20 flex">
                        <p className="mb-5">{obj.model}</p>
                        <p>{obj.price} руб.</p>
                     </div>
                     <img className="removeBtn" src="/image/btn-remove.svg" alt="btn_remove_icon" />
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
               <button className="greenButton">Оформить заказ <img src="/image/arrow.svg" alt="arrow_icon" /></button>
            </div>
         </div>
      </div>
   );
}

export default Drawer;