function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/image/logo.png" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
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
      <div className="content p-40">
        <div className="content_title d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search_sneakers d-flex align-center pr-10 pl-10">
            <img className="mr-10" width={15} height={15} src="/image/search.svg" alt="search_icon" />
            <input className="search_input" placeholder="Поиск..." type="text" />
          </div>
        </div>
        
        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src="/image/sneakers/1.jpg" alt="sneakers_photo" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/image/plus.svg" alt="add_icon" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/image/sneakers/2.jpg" alt="sneakers_photo" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/image/plus.svg" alt="add_icon" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/image/sneakers/3.jpg" alt="sneakers_photo" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/image/plus.svg" alt="add_icon" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/image/sneakers/4.jpg" alt="sneakers_photo" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/image/plus.svg" alt="add_icon" />
              </button>
            </div>
          </div>
          
        </div>


      </div>

    </div>
  );
}

export default App;
