import styles from './Card.module.scss';
import React from 'react';

function Card({model, imageUrl, price, onFavorite, onPlus}) {
   const [isAdded, setIsAdded] = React.useState(false);
   
   const onClickPlus = () => {
      onPlus({model, imageUrl, price});
      setIsAdded(!isAdded);
   }

   return (
      <div className={styles.card}>
         <div className={styles.favorite} onClick={onFavorite}>
            <img src="/image/heart-off.svg" alt="heart_icon" />
         </div>
         <img width={133} height={112} src={imageUrl} alt="sneakers_photo" />
         <h5>{model}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>{price} руб.</b>
            </div>
            <img
               className={styles.plus}
               onClick={onClickPlus}
               src={isAdded ? "/image/btn-on.svg" : "/image/btn-off.svg"}
               alt="add_icon" 
            />
         </div>
      </div>
   );
}

export default Card;