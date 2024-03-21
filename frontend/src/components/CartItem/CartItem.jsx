import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../images/remove_icon.png'

const CartItem = () => {
    const {getTotalCartAmount, all_products, cartItems, removeFromCart} = useContext(ShopContext)
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
            {all_products.map((e) => {
                if(cartItems[e.id]>0) {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='cartincon-product-icon'/>
                            <p>{e.title}</p>
                            <p>${e.price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.price * cartItems[e.id]}</p>
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
                            <h3>${getTotalCartAmount( )}</h3>
                        </div>
                        <button>MAKE PAYMENT</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CartItem
