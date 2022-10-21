import styles from './Card.module.scss';
import React from 'react';
import ContentLoader from "react-content-loader"
import { AppContext } from '../../App';

function Card({
   id,
   model,
   imageUrl,
   price,
   onFavorite,
   onPlus,
   favorited = false,
   loading = false
}) {
   const { isItemAdded } = React.useContext(AppContext);
   const [isFavorite, setIsFavorite] = React.useState(favorited);
   const obj = { id, parentId: id, model, imageUrl, price };

   const onClickPlus = () => {
      onPlus(obj);
   }

   const onClickFavorite = () => {
      onFavorite(obj);
      setIsFavorite(!isFavorite);
   }

   return (
      <div className={styles.card}>
         {loading ? (
            <ContentLoader
               speed={2}
               width={155}
               height={250}
               viewBox="0 0 155 265"
               backgroundColor="#f3f3f3"
               foregroundColor="#ecebeb">
               <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
               <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
               <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
               <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
               <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
            </ContentLoader>
         ) : (
            <>
               {onFavorite && (
                  <div className={styles.favorite} onClick={onFavorite}>
                     <img
                        onClick={onClickFavorite}
                        src={isFavorite ? process.env.PUBLIC_URL + '/image/heart-on.svg' : process.env.PUBLIC_URL + '/image/heart-off.svg'}
                        alt="heart_icon" />
                  </div>
               )}
               <img width='100%' height={130} src={process.env.PUBLIC_URL + imageUrl} alt="sneakers_photo" />
               <h5>{model}</h5>
               <div className="d-flex justify-between align-center">
                  <div className="d-flex flex-column">
                     <span>Цена:</span>
                     <b>{price} руб.</b>
                  </div>
                  {onPlus && (
                     <img
                        className={styles.plus}
                        onClick={onClickPlus}
                        src={isItemAdded(id) ? process.env.PUBLIC_URL +  "/image/btn-on.svg" : process.env.PUBLIC_URL + "/image/btn-off.svg"}
                        alt="add_icon"
                     />
                  )}
               </div>
            </>
         )}
      </div>
   );
}

export default Card;