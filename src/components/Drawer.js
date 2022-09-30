function Drawer() {
   return (
      <div style={{ 'display': 'none' }} className="overlay">
         <div className="drawer">
            <h2 className="d-flex justify-between mb-30">Корзина<img className="removeBtn cu-p" src="/image/btn-remove.svg" alt="btn_remove_icon" /></h2>
            <div className="items">
               <div className="cart_item d-flex align-center mb-20">
                  <img className="mr-20" width={70} height={70} src="/image/sneakers/5.jpg" alt="sneakers_photo" />
                  <div className="mr-20">
                     <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                     <p>12 999 руб.</p>
                  </div>
                  <img className="removeBtn" src="/image/btn-remove.svg" alt="btn_remove_icon" />
               </div>

               <div className="cart_item d-flex align-center mb-20">
                  <img className="mr-20" width={70} height={70} src="/image/sneakers/3.jpg" alt="sneakers_photo" />
                  <div className="mr-20">
                     <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                     <p>12 999 руб.</p>
                  </div>
                  <img className="removeBtn" src="/image/btn-remove.svg" alt="btn_remove_icon" />
               </div>
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