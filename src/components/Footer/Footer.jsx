import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    const timing = [
        {time:"Monday 11am-8pm"},
        {time:"Tuesday 11am-6pm"},
        {time:"Saturday 11am-5pm"},
        {time:"Sunday 11am-4pm"},

    ]

    const resources = [
        {resource:"Home Insurance"},
        {resource:"Travel Insurance"},
        {resource:"Car Insurance"},
        {resource:"Business Insurance"},
        {resource:"Heal Insurance"},
    ]

    const company = [
        {company:"About Us"},
        {company:"Company"},
        {company:"Press and Blog"},
        {company:"Privacy Policy"},
    ]
    return ( 
        <footer className=' bg-black w-screen  flex flex-col    '>

<div className='text-white md:px-10 md:flex  ml-5'>
    <div className=' flex flex-col items-start py-2 md:py-10 md:w-3/12' >
        <h1 className='text-2xl font-extrabold pb-6'>Company</h1>
        <ul className=' flex flex-col items-start text-sm'>
            {company.map((item)=>( <li className='py-2 hover:ml-2 hover:animate-pulse hover:delay-100'>{item.company}</li>))}
           
            {/* <li className='py-2 hover:ml-2 hover:animate-pulse'><a href="">Company</a></li>
            <li className='py-2 hover:ml-2 hover:animate-pulse'><a href="">Press and Blog</a></li>
            <li className='py-2 hover:ml-2 hover:animate-pulse'><a href="">Privacy Policy</a></li> */}
               
        </ul>
    </div>

    <div className=' flex flex-col items-start md:py-10 py-2 md:w-3/12 ' >
        <h1 className='text-2xl font-extrabold pb-6'>Open Hour</h1>
        <ul className=' flex flex-col items-start text-sm'>
{ timing.map((item)=>( <li className='py-2 hover:ml-2 hover:animate-pulse hover:delay-100'>{item.time}</li>))}

        </ul>
    </div>

    <div className=' flex flex-col items-start md:py-10 py-2 md:w-3/12' >
        <h1 className='text-2xl font-extrabold pb-6'>Resources</h1>
        <ul className=' flex flex-col items-start text-sm'>

            {resources.map((item)=>(  <li className='py-2 hover:ml-2 hover:animate-pulse hover:delay-100'>{item.resource}</li>))}
           
            {/* <li className='py-2 hover:ml-2 hover:animate-pulse'><a href="">Travel Insurance</a></li>
            <li className='py-2 hover:ml-2 hover:animate-pulse'><a href="">Car Insurance</a></li>
            <li className='py-2 hover:ml-2 hover:animate-pulse'><a href="">Business Insurance</a></li>
            <li className='py-2 hover:ml-2 hover:animate-pulse'><a href="">Heal Insurance</a></li>   */}
        </ul>
    </div>


    <div className=' flex flex-col items-start md:py-10 py-2 md:w-3/12' >
        <h1 className='text-2xl  pb-6'>
            
        <div className="text-3xl font-extrabold flex   ">
          <span className='text-white'>BLAZE</span><span className='text-red-600 pl-2'>GYM</span>
        </div>
        </h1>
        <p className='text-sm w-9/12'>Embrace the fire within at Blaze Gym, where each workout fuels not just strength, but a passionate journey towards a healthier, fitter you.</p>

        <div className='flex pt-10 text-3xl justify-between gap-2'>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name='logo-instagram'></ion-icon>
        <ion-icon name='logo-twitter'></ion-icon>
        <ion-icon name='globe-outline'></ion-icon>
        </div>
       
    </div>
</div>
<div></div>
<div className='w-8/12 h-[0.5px] bg-slate-300 my-10 mx-auto'></div>
<p className='text-white mx-auto w-8/12 md:w-full text-center pb-7'>Copyright ©2024 All rights reserved | This project is made by Zain Malik</p>
        </footer>
     );
}

export default Footer ; 