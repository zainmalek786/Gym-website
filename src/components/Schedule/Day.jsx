import React, { useState } from 'react';
function Day(
    { onClick,
    text="Saturday"
    }
) {
    const [clicked,setClicked] = useState(false)

    const handleClick = ()=>{
        if (!clicked){
            setClicked(true)
        }
       if(clicked) setClicked(false)
    }
    return (
        <>
        <span className={`text-black md:w-1/12 w-3/12 my-2 text-center px-4 py-4 mx-2 shadow-md shadow-slate-300 font-bold  ${clicked ? 'bg-red-500  text-white':''}`} onClick={handleClick}>{text}</span>
        </>
      );
}

export default Day;
