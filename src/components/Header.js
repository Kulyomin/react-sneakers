function Header(props) {
   return (
      <header className="d-flex justify-between align-center p-40">
         <div className="headerLeft d-flex align-center">
            <img width={40} height={40} src="/image/logo.png" alt="" />
            <div className="headerInfo">
               <h3 className="text-uppercase">React Sneakers</h3>
               <p>Магазин лучших кроссовок</p>
            </div>
         </div>
         <ul className="d-flex">
            <li onClick={props.onClickCart} className="mr-30 cu-p" >
               <img width={18} height={18} src="/image/cart.svg" alt="cart_icon" />
               <span>1205 руб.</span>
            </li>
            <li>
               <img width={18} height={18} src="/image/like.svg" alt="like_icon" />
            </li>
            <li>
               <img width={18} height={18} src="/image/user.svg" alt="user_icon" />
            </li>
         </ul>
      </header>
   );
}

export default Header;