import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

// Без использования функции createContext React не будет обновлять данные в приложении
export const AppContext = React.createContext({});

function App() {
   const [items, setItems] = React.useState([]);
   const [cartItems, setCartItems] = React.useState([]);
   const [favorites, setFavorites] = React.useState([]);
   const [searchValue, setSearchValue] = React.useState('');
   const [cartOpened, setCartOpened] = React.useState(false);
   const [isLoading, setIsLoading] = React.useState(true);

   React.useEffect(() => {
      // В useEffect можно делать ассинхронные функции, но сам хук нельзя делать ассинхронным
      async function fetchData() {
         const cartResponce = await axios.get('https://63397af866857f698fb6abf7.mockapi.io/cart');
         const favoriteResponce = await axios.get('https://63397af866857f698fb6abf7.mockapi.io/favorites');
         const itemsResponce = await axios.get('https://63397af866857f698fb6abf7.mockapi.io/items');
         // Окончание загрузки страницы после подгрузки данных
         setIsLoading(false);
         // Соблюдая данный порядок, рендерим экран:Корзина, Избранное, Страница
         setCartItems(cartResponce.data);
         setFavorites(favoriteResponce.data);
         setItems(itemsResponce.data);
      }
      // Вызов ассинхронной функции отрисовки
      fetchData();
   }, []);

   // Добавляет элемент в корзину
   const onAddToCart = (obj) => {
      if(cartItems.find((item) => Number(item.id) === Number(obj.id))) {
         axios.delete(`https://63397af866857f698fb6abf7.mockapi.io/cart/${obj.id}`);
         setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
         axios.post('https://63397af866857f698fb6abf7.mockapi.io/cart', obj);
         setCartItems(prev => [...prev, obj]);
      }
   }

   // Добавляет элемент в избранное
   const onAddToFavorite = (obj) => {
      try{
         if( favorites.find(favObj => favObj.id === obj.id)) {
            axios.delete(`https://63397af866857f698fb6abf7.mockapi.io/favorites/${obj.id}`);
            setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
         } else {
            axios.post('https://63397af866857f698fb6abf7.mockapi.io/favorites', obj);
            setFavorites(prev => [...prev, obj]);
         }
      } catch(error) {
         alert('Не удалость добавить в избранное.')
      }
   }

   // Удаляет элемент из корзины
   const onRemoveItem = (id) => {
      axios.delete(`https://63397af866857f698fb6abf7.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
   }

   // Проверяет значение вводимого символа в INPUT
   const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value);
   }

   // Если хотя бы один id есть в корзине выдаёт true
   const isItemAdded = (id) => {
      return cartItems.some((obj) => Number(obj.id) === Number(id));
   }

   return (
      <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems}}>
         <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
            
            <Header onClickCart={() => setCartOpened(true)} />
            
            <Routes>
               <Route path="" exact element={
                  <Home 
                     items={items} 
                     cartItems={cartItems}
                     searchValue={searchValue} 
                     setSearchValue={setSearchValue}
                     onChangeSearchInput={onChangeSearchInput}
                     onAddToFavorite={onAddToFavorite}
                     onAddToCart={onAddToCart}
                     isLoading={isLoading}
                  />}
               />
               <Route path="favorites" exact element={<Favorites onAddToFavorite={onAddToFavorite}/>} />
            </Routes>
         </div>
      </AppContext.Provider>
   );
}

export default App;
