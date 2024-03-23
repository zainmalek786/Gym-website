
// Hero.js
import React from 'react';
import coverImage from '../images/cover2.jpg'
import Button from './Button';


const Home = () => {
  const slideInStyle = {
    animation: 'slideIn 1.2s ease-out', // Adjust the duration and easing as needed
  };
  const slideInStyle2 = {
    animation: 'slideIn 1.3s ease-out', // Adjust the duration and easing as needed
  };
  const slideInStyle3 = {
    animation: 'slideIn 1.4s ease-out', // Adjust the duration and easing as needed
  };
  const slideInStyle4 = {
    animation: 'slideIn 1.5s ease-out', // Adjust the duration and easing as needed
  };
  const slideInStyle5 = {
    animation: 'slideIn 1.6s ease-out', // Adjust the duration and easing as needed
  };
  return (
    <section className=''>
    <div className="overflow-hidden w-screen md:h-auto h-screen relative ">
      <img
        src={coverImage}  // Replace with your image URL
        alt="Hero Image"
        className="md:w-screen md:h-auto h-screen  object-center object-cover"
      /> 
    </div>
    <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(5);
            }
          }
        `}
      </style>
    <div className='absolute md:top-52 top-48 left-12 md:left-20 pt-2'>
      <div className=' text-white md:text-7xl text-4xl font-extrabold'>
        <p className='md:pt-1' style={slideInStyle} >BUILD PERFECT </p>
        <p className='md:pt-auto pt-3'style={slideInStyle2}> BODY SHAPE  </p>
        <p className='md:pt-auto pt-3' style={slideInStyle3}>FOR GOOD</p> 
        <p className='md:pt-auto pt-3'style={slideInStyle4}>HEALTHY LIFE.</p>
        </div>
        <div className='md:text-center md:pt-6 pt-6' style={slideInStyle5}>
        <Button value='Become A Member' className='py-5 px-5' />
        </div>
    </div>
    </section>
  );
};

export default Home;
