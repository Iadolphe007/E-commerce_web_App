import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <p className="item-price-new">${props.price}</p>
    </div>
  )
}

export default Item
