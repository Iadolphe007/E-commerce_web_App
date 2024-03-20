import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt="" />
        </Link>
        <p>{props.name}</p>
        <p className="item-price-new">${props.price}</p>
        {/* <div className="item-prices">
            <p className="item-price-new">${props.price}</p>
        </div> */}
    </div>
  )
}

export default Item
