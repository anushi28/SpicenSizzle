
import React, { useState } from 'react';
import './ExploreMenu.css';

import { menu_list, dishes } from '../../assests/assests'; // Adjust the path as needed
import { Dish } from '../Dishes/Dish';

export const ExploreMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  console.log('Menu List:', menu_list);


  const handleCategoryClick = (category) => {
    console.log('Category clicked:', category);
    setSelectedCategory(category);
  };

  const filteredDishes = selectedCategory
    ? dishes.filter(dish => dish.dish_category === selectedCategory)
    : [];

  console.log('Filtered Dishes:', filteredDishes);

  return (
    <div className='menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <br />
      <span>
        Choose from the diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and
        <br />
        elevate your dining experience, one delicious meal at a time.
      </span>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className='explore-menu-list-item'
            onClick={() => handleCategoryClick(item.menu_name)}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className='dishbox'>
          {filteredDishes.map((item, index) => (
            <Dish key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
