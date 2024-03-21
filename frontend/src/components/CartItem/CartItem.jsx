import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../images/remove_icon.png'

const CartItem = () => {
    const {getTotalCartAmount, all_product, CartItem, removeFromCart} = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartimes-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if(CartItem[e.id]>0) {
                    return    <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src="" alt="" className='cartincon-product-icon'/>
                        <p>{e.name}</p>
                        <p>{e.price}</p>
                        <button className='cartitems-quantity'>{CartItem[e.id]}</button>
                        <p>${e.price * CartItem[e.id]}</p>
                        <img src={remove_icon}  className='cartitems-remove-icon' onClick={() =>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>
                }
                return null
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-tem">
                            <p>total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-tem'>
                            <p>shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-tem'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>Enter promo code if available</p>
                        <div className="cartitems-promobox">
                            <input type="text" name="" id="" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CartItem
