import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <p className="item-price-new">{props.new_price}</p>
        </div>
      
    </div>
  )
}

export default Item
