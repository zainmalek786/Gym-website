import React from 'react';
function Timing({
    time="6am-8am",
    trainingtype=" Kick Boxing",
    trainer="Louis Alex"
}) {
    return ( <>
    <div className='w-3/5 md:w-2/12 text-black shadow-md shadow-slate-300 h-full py-10 mx-2 my-4 text-center hover:text-white hover:bg-red-600' >
        <span className='px-8 py-4 text-white bg-black '>{time}</span>
        <p className='pt-5 font-semibold'> {trainingtype}</p>
        <p className=""> {trainer}</p>
    </div>
    </> );
}

export default Timing;