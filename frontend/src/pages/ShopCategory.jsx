import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item/Item'

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>Products</p>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return <Item 
            key={i}
            id={item.id}
            name={item.title}
            image={item.image}
            price={item.price}
            />
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
