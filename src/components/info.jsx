import React from 'react'
import { AppContext } from '../App';

export const Info = ({title, image, description}) => {
    const {setCartOpened} = React.useContext(AppContext);

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" src={image} alt="emptyCart_photo" />
            <h2>{title}</h2>
            <p className="opacity-6 ">{description}</p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
                <img src={process.env.PUBLIC_URL + "/image/arrow.svg"} alt="arrow_icon" />
                Вернуться назад
            </button>
        </div>
  )
}

export default Info;
