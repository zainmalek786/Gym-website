import { list } from 'postcss';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [open,setOpen] = useState(false)
  const handleToggle = ()=>{
    if(open){
      setOpen(false)
    }
    if(!open){
      setOpen(true)
    }
    console.log(open)
  }
  const navItem = [
    {
      name:"HOME",
      slug:"",
    },
    {
      name:"ABOUT",
      slug:"about",
    },
    {
      name:"CLASSES",
      slug:"classes",
    },
    {
      name:"SCHEDULE",
      slug:"schedule",
    },
    {
      name:"CONTACT",
      slug:"contact",
    },
    {
    name:"SIGNUP",
    slug:"signup",
  },
  ]
    return (
      <nav className='bg-black w-screen h-16 flex sticky top-0 left-0  items-center  z-10'>

        <div className=' items-center   md:flex   '>

        <div className="text-4xl font-extrabold flex ml-3 md:ml-14   ">
          <span className='text-white'>BLAZE</span><span className='text-red-600 pl-2'>GYM</span>
        </div>
        
<ul className={`bg-black md:bg-none mt-2 md:mt-0 md:pr-0 w-screen text-center  flex flex-col md:flex-row md:flex-grow items-center text-white absolute md:fixe md:right-16 font-semibold text-md md:text-sm md:w-auto  ${open ? 'top-15':'top-[-400px]' } md:top-auto `}>
  {
    navItem.map((item)=> (  (item.name !== "SIGNUP"?  
    (   <li key={item.slug} className='py-4 px-4 md:px-3 lg:px-6 md:py-0 w-screen md:w-auto cursor-pointer text-red-700 hover:bg-gray-700 md:hover:bg-black'><NavLink to={item.slug} 
    
    className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? "active" : "text-white"
  }
    
    >{item.name}</NavLink> </li> )
    :
    (   <li key={item.slug} className='py-4 px-4 md:px-3 lg:px-6 md:py-0 w-screen md:w-20   cursor-pointer hover:bg-gray-700 md:hover:bg-black'><button className=' bg-red-600 py-2 w-20 border border-solid  border-black box-border rounded-md  hover:bg-red-400'>{item.name}</button></li> )
    )
 
    )
    )
  }

  
  {/* <li className='py-2 px-1  md:p-0 w-screen   cursor-pointer  hover:bg-gray-700 '>  <button className=' bg-red-600 py-2 w-20 border border-solid  border-black box-border rounded-md'>SignUp</button></li> */}

</ul>

        </div>
        <div className='text-5xl text-white md:hidden absolute right-7 cursor-pointer' onClick={()=>handleToggle()} >
          {/* {open ? <ion-icon name="close-outline"></ion-icon>: <ion-icon name='menu-outline'></ion-icon>} */}
          <ion-icon name={open ? 'close-outline' :'menu-outline'}></ion-icon>
        
        </div>
      </nav>
         );
}

export default Header ;