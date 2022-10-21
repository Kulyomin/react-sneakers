import React from 'react';
import Card from '../components/Card/Card';

function Home({
   items,
   searchValue,
   onChangeSearchInput,
   onAddToFavorite,
   onAddToCart,
   isLoading
}) {

   const renderItems = () => {
      const filtredItems = items.filter((item) =>
        item.model.toLowerCase().includes(searchValue.toLowerCase()),
      );
      // Если идёт загрузка - рендер 8 элементов, иначе показывает карточки с товаром
      return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
        <Card
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            loading={isLoading}
            {...item}
        />
      ));
    };

   return (
      <div className="content p-40">
         <div className="content_title d-flex justify-between align-center mb-40">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
            <div className="search_sneakers d-flex align-center pr-10 pl-10">
               <img className="mr-10" width={15} height={15} src={process.env.PUBLIC_URL + '/image/search.svg'} alt="search_icon" />
               <input onChange={onChangeSearchInput} placeholder="Поиск..." type="text" />
            </div>
         </div>

         <div className="sneakerContainer">
            {renderItems()}
         </div>
      </div>
   );
}

export default Home;