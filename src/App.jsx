import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

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
         try {
            // Promise.all - Промис который выполняет массив промисов(Получение данных с бека)
            const [cartResponce, favoriteResponce, itemsResponce] = await Promise.all([
               axios.get('https://63397af866857f698fb6abf7.mockapi.io/cart'),
               axios.get('https://63397af866857f698fb6abf7.mockapi.io/favorites'),
               axios.get('https://63397af866857f698fb6abf7.mockapi.io/items')
            ])
            setIsLoading(false);// Окончание загрузки страницы после подгрузки данных
            // Соблюдая данный порядок, рендерим экран:Корзина, Избранное, Страница
            setCartItems(cartResponce.data);
            setFavorites(favoriteResponce.data);
            setItems(itemsResponce.data);
         } catch (error) {
            alert("Ошибка при загрузке страницы");
            console.log(error);
         }
      }
      // Вызов ассинхронной функции отрисовки
      fetchData();
   }, []);

   // Добавляет элемент в корзину
   const onAddToCart = async (obj) => {
      try {
         //Находит среди элементов корзины товар с parentID = Id карточки на которую кликнули
         const findItems = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
         if (findItems) {
            setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
            await axios.delete(`https://63397af866857f698fb6abf7.mockapi.io/cart/${findItems.id}`);
         } else {
            setCartItems((prev) => [...prev, obj]);
            const { data } = await axios.post('https://63397af866857f698fb6abf7.mockapi.io/cart', obj);
            setCartItems((prev) => prev.map(item => {
               if (item.parentId === data.parentId) {
                  return {
                     ...item,
                     id: data.id,
                  };
               }
               return item;
            }),
            );
         }
      } catch (error) {
         alert("Ошибка при добавлении элемента в корзину");
         console.log(error);
      }
   };

   // Удаляет элемент из корзины
   const onRemoveItem = async (id) => {
      try {
         axios.delete(`https://63397af866857f698fb6abf7.mockapi.io/cart/${id}`);
         setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
      } catch (error) {
         alert("Ошибка при добавлении элемента в корзину");
         console.log(error);
      }
   }

   // Добавляет элемент в избранное
   const onAddToFavorite = async (obj) => {
      try {
         if (favorites.find(favObj => favObj.id === obj.id)) {
            axios.delete(`https://63397af866857f698fb6abf7.mockapi.io/favorites/${obj.id}`);
            setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
         } else {
            const { data } = await axios.post('https://63397af866857f698fb6abf7.mockapi.io/favorites', obj);
            setFavorites(prev => [...prev, data]);
         }
      } catch (error) {
         alert('Не удалость добавить в избранное.')
      }
   }

   // Проверяет значение вводимого символа в INPUT
   const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value);
   }

   // Если хотя бы один id есть в корзине выдаёт true
   const isItemAdded = (id) => {
      return cartItems.some((obj) => Number(obj.parentId) === Number(id));
   }

   return (
      <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, onAddToCart, setCartOpened, setCartItems }}>
         <div className="wrapper clear">
            <Drawer
               items={cartItems}
               onClose={() => setCartOpened(false)}
               onRemove={onRemoveItem}
               opened={cartOpened}
            />

            <Header onClickCart={() => setCartOpened(true)} />

            <Routes>
               <Route path="/react-sneakers" exact element={
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
               <Route path="/react-sneakers/favorites" exact element={<Favorites onAddToFavorite={onAddToFavorite} />} />
               <Route path="/react-sneakers/orders" exact element={<Orders />} />
            </Routes>
         </div>
      </AppContext.Provider>
   );
}

export default App;
