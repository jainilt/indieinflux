import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav_bar from './Nav_bar';
import Uniform_hoodie_black from './Uniform_hoodie_black';
import Uniform_hoodie_brown from './Uniform_hoodie_brown';

function Other_colors_for_uniform_black_hoodie() {
  // Sample product data (replace with your actual data structure)
  const productColors = [
    { id: 1, name: 'Color 1', image: '/src/img/uniform/uniform-image-1.png', link: '/Uniform_hoodie_black' },
    { id: 2, name: 'Color 2', image: '/src/img/uniform/other2.png', link: '/Uniform_hoodie_brown' }
    // ... add data for other colors
  ];

  return (
    <>
      <Nav_bar />
      <div className="product-vars_for_uniform_black_hoodie">
        {productColors.map((color) => (
          <Link to={color.link} key={color.id}>
            <img
              className="product-vars-img-for-hoodie"
              src={color.image}
              alt={color.name}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Other_colors_for_uniform_black_hoodie;
