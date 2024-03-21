import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../images/star_icon.png'
import stardull_icon from '../images/stardull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdeslay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.title}</h1>
        <div className="productdisplay-right-star">
          <img src={stardull_icon} alt="" />
          <img src={stardull_icon} alt="" />
          <img src={stardull_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <p>{product.rating.rate}</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price">${product.price}</div>
        </div>
        <div className="productdisplay-right-description">{product.description}</div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-size-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDisplay