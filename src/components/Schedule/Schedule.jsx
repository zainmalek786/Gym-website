import React from 'react';
import { useState } from 'react';
import Day from './Day';
import Timing from './Timing';

function Schedule() {

    const days =[
        { day : "Monday"},
        { day : "Tuesday"},
        { day : "Wednesday"},
        { day : "Thursday"},
        { day : "Friday"},{ day : "Saturday"},
        { day : "Sunday"},
       
    ]
    const timing = [
        { time:"6pm-8pm",
          trainer:"Francis Neilson",
          trainingtype:"Kick Boxing"},
        
          { time:"10pm-12am",
          trainer:"Francis Neilson",
          trainingtype:"Yoga Training"},

          { time:"8pm-10pm",
          trainer:"Francis Neilson",
          trainingtype:"Body Building"},

          { time:"5am-7am",
          trainer:"Francis Neilson",
          trainingtype:"Muscle Training"},

          { time:"10am-12am",
          trainer:"Francis Neilson",
          trainingtype:"Advance Training"},
        
        ]
    return (  <>


    <div className='flex flex-wrap md:items-center md:justify-center w-screen h-full mt-32'>
   {days.map((weekday)=>(  <Day text={weekday.day} /> ))}

    </div>

    <div className=' flex flex-wrap  justify-center items-center mt-24 mb-36'>
        {timing.map((item)=>(  <Timing trainer={item.trainer} time={item.time} trainingtype={item.trainingtype}/>))}

    </div>
   
    </> );
}

export default Schedule;