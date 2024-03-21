import React from 'react'
import './RelatedProduct.css'
import data_product from '../images/data'
import Item from '../Item/Item'

const RelatedProduct = (props) => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
            return <Item 
            key={i}
            id={item.id}
            name={item.title}
            image={item.image}
            price={item.price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
