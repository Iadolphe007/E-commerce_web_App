import React from 'react'
import './Item.css'
// import products from '../images/products'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="product image" />
        <p>{props.name}</p>
        <p className="item-price-new">$ {props.price}</p>
        {/* <div className="item-prices">
            <p className="item-price-new">{props.price}</p>
        </div> */}
      
    </div>
  )
}

export default Item
