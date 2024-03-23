import React from 'react';
import Aboutimg from '../images/aboutimg.jpg'

function About() {
    return (
        <div className='md:flex'>
        


            <div className="md:w-6/12 md:py-9   border-9 border-black md:h-screen">
                <h1 className='md:hidden text-center py-10 font-semibold text-3xl'>ABOUT US</h1>
            <img src={Aboutimg} alt="" className=' border-red-600 border-8 mb-10 w-3/5 mx-auto ' />
            </div>
            <div className="md:w-6/12 bg-black text-slate-300 h-screen">
                <p className='md:text-4xl text-2xl font-extrabold md:pl-20 md:pt-20  text-gray-200 mx-12 pt-14'>SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!</p>
                <p className='md:px-20 md:pt-16 font-normal mx-12 pt-14'>Welcome to Blaze Gym, where fitness meets passion! At Blaze Gym, we're not just a fitness center; we're a community dedicated to igniting the flames of your potential. Our state-of-the-art facilities, expert trainers, and vibrant atmosphere are designed to fuel your fitness journey.</p>
                <p className='md:px-20 md:pt-20 font-normal text-white mx-12 pt-14 pb'> Join us at Blaze Gym and let's blaze a trail to a healthier, stronger you!</p>
            </div>
        </div>
      );
}

export default About;