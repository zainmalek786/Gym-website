import React from 'react';
import Button from './Button';

function Contact() {
    return ( <>
    <div className='h-screen w-screen  items-center justify-center text-center'>


<div className='md:w-8/12 w-screen  mx-auto my-10 bg-black md:h-5/6'><form action="submit" className=''>
    <div className='md:flex justify-evenly items-center  pt-10'>
    <input type="text"  placeholder='Your Name *' className=' h-10 border-none pl-10 md:w-5/12 w-10/12 mb-10'/>
    <input type="email"  placeholder='Your Email *' className=' h-10 border-none pl-10 md:w-5/12 w-10/12 mb-10'/>
    </div>
    <input type="text" placeholder='Subject' className=' h-10 border-none pl-10 md:w-11/12 w-10/12 mb-10'  />

    <input type="text" placeholder='Message' className=' h-52 border-none pl-10 pt-2 md:w-11/12 w-10/12 mb-10'  />
    

    <div>
    <Button type='button' onClick={ ()=>{ preventDefault()}} value='Submit' className='mb-28 px-10 py-4' />
    </div>
    
    </form></div>
    </div>

    </> );
}

export default Contact;