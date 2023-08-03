import React from 'react';
import FoodCard from './FoodCard';
import burgImage from './burg.jpg';

const foodData = [
    { id: 1, title: 'Chicken Burger King Tasty', imageSrc: burgImage, altText: 'Food 1' },
    { id: 2, title: 'Mashrooms capcicum Pizza', imageSrc: burgImage, altText: 'Food 2' },
    { id: 3, title: 'Mutton Tasty Sushi', imageSrc: burgImage, altText: 'Food 3' },
    { id: 4, title: 'Salad With Green Vegetables', imageSrc: burgImage, altText: 'Food 4' },
    { id: 5, title: 'Cool and chill Ice Cream', imageSrc: burgImage, altText: 'Food 5' },
    { id: 6, title: 'Hot Hot Tasty Pasta', imageSrc: burgImage, altText: 'Food 6' },
  ];
const FoodCardGrid = () => {
  return (
    <>
    <div className="cards-container">
      {foodData.map(food => (
        <FoodCard
          key={food.id}
          title={food.title}
          imageSrc={food.imageSrc}
          altText={food.altText}
        />
      ))}
     

    </div>
    <button className="try-button">Try for Free</button>
    </>
  );
};

export default FoodCardGrid;
