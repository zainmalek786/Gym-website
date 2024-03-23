import React from 'react';

function Button({
    className,value="button",onClick,type="button"
})
 
{
    return (

<input type={type} className={`${className} md:px-14 md:py-5 bg-red-600 text-white font-semibold rounded-sm px-3 `} value={value} onClick={onClick}/>
      );
}

export default Button;