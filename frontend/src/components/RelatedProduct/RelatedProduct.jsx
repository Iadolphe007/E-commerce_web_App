import React from 'react'
import './RelatedProduct.css'
import all_products from '../images/all_products'
import Item from '../Item/Item'

const RelatedProduct = (props) => {
  const randomItems = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * all_products.length);
    const randomItem = all_products[randomIndex];
    randomItems.push(randomItem);
  }
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {randomItems.map((item, index) => (
          <Item 
            key={index}
            id={item.id}
            name={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct
