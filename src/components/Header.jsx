import React, { useState } from 'react';
import '../index.css'
import bgnavImage from '../assets/bgnav.png';

const Header = () => {
  const [activeFilter, setActiveFilter] = useState('ALL COURSES');

  const filters = ['ALL COURSES', 'Python', 'Web Development', 'Data Science', 'Tools', 'ML'];

  return (
    <header className=" text-white py-16 px-4 font-press" 
    style={{
      // Background image for the sci-fi pixel art
      backgroundImage: `url('${bgnavImage}')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[600px] mb-12 CONTAINER mx-auto text-center  mb-30">
          <p className=" text-px-24   mb-6">
            Explore our 
          </p>
          <p className="text-2xl md:text-px-28  mb-6 text-accent-yellow">ITERACTIVE COURSES</p>
          <p className="text-lg mb-8 lg:text-px-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            
          </p>
       </div>

      
      </div>
    </header>
  );
};

export default Header;