import React from 'react'
import './Dish.css'
export const Dish = ({ item }) => {
  if (!item) return null; // Guard against undefined item

  return (
    <div className='dishname'>
      <img src={item.dish_image} alt={item.dish_name} className='dishimg' />
      <h2>{item.dish_name}</h2>
      <span>{item.dish_description}</span> <br />
      <h3>{item.dish_price}</h3>
      <h3>{item.dish_category}</h3>
    </div>
  );
};
