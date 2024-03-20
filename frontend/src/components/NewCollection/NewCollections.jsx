import React from 'react'
import './NewCollection.css'
import new_collection from '../images/new_collection'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item, i) => {
            return <Item 
            key={i}
            id={item.id}
            name={item.title}
            image={item.image}
            price={item.price}
          />
        })}
      </div>
    </div>
  )
}

export default NewCollections
