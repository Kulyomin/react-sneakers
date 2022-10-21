import React from 'react';
import Card from '../components/Card/Card';
import {AppContext} from '../App';

function Favorites({onAddToFavorite}) {
   const {favorites} = React.useContext(AppContext);
   
   return (
      <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="sneakerContainer">
      {
         favorites.map((item, index) => (
            <Card
               key={item.id}
               favorited={true}
               onFavorite={onAddToFavorite}
               {...item}
            />
         ))
      }
      </div>
    </div>
   );
}

export default Favorites;