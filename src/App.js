import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
   const [items, setItems] = React.useState([]);
   const [cartItems, setCartItems] = React.useState([]);
   const [cartOpened, setCartOpened] = React.useState(false);

   React.useEffect( () => {
      fetch('https://63397af866857f698fb6abf7.mockapi.io/items').then(res => {
         return res.json();
      }).then(json => {
         setItems(json);
      });
   }, []);

   const onAddToCart = (obj) => {
      setCartItems(prev => [...prev, obj]);
   }

   return (
      <div className="wrapper clear">
         {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
         <Header onClickCart={() => setCartOpened(true)} />
         <div className="content p-40">
            <div className="content_title d-flex justify-between align-center mb-40">
               <h1>Все кроссовки</h1>
               <div className="search_sneakers d-flex align-center pr-10 pl-10">
                  <img className="mr-10" width={15} height={15} src="/image/search.svg" alt="search_icon" />
                  <input placeholder="Поиск..." type="text" />
               </div>
            </div>

            <div className="sneakerContainer">
               {
                  items.map((item) => (
                     <Card
                        model={item.model} 
                        price={item.price} 
                        imageUrl={item.imageUrl}
                        onFavorite={() => console.log('Add favorite')}
                        onPlus={(obj) => onAddToCart(obj)} 
                     />
                  ))
               }
            </div>
         </div>
      </div>
   );
}

export default App;
