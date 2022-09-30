function Card(props) {
   return (
      <div className="card">
         <div className="favorite">
            <img src="/image/heart-off.svg" alt="heart_icon" />
         </div>
         <img width={133} height={112} src="/image/sneakers/1.jpg" alt="sneakers_photo" />
         <h5>{props.model}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>{props.price} руб.</b>
            </div>
            <button className="button">
               <img width={11} height={11} src="/image/plus.svg" alt="add_icon" />
            </button>
         </div>
      </div>
   );
}

export default Card;