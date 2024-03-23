import React from 'react';
import ClassNo from './ClassNo';
import Button from '../components/Button'
import Classimg from '../images/class.jpg';


function Classes() {
    const text = [ {class:"First Training Class"},
    {class:"Second Training Class"},
    {class:"Third Training Class"},
    {class:"Fourth Training Class"},

]
    return (  
        <div>
            <div className='text-center '><h2 className='text-3xl py-12 font-extrabold'><span className=''>OUR</span>  <span className='text-red-600'>CLASSES</span></h2>
          <p className='text-md md:px-72'>Explore our diverse classes designed for all fitness levels. Sculpt your body  and refresh your mind with our tailored workouts.
          </p>
            </div>

            <div className='md:flex'>
                <div className="md:w-5/12 item-center justify-center text-center py-20">
                    {text.map((item)=>( <ClassNo text={item.class}/> ))}
                    <Button className='md:w-3/5 w-4/6 py-6 shadow-sm shadow-gray-400' value='View All Schedules'/>

                </div>
                <div className=' md:w-7/12'>

                    <div className="md:px-24 px-10 md:pt-28">
                        <img src={Classimg} alt="" className='object-cover ' />
                        <h3 className='text-2xl font-semibold pt-6'>Training Classes</h3>
                        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt expedita aliquid consectetur cupiditate quidem reprehenderit fuga animi provident quibusdam quae, consequuntur commodi exercitationem porro nam.</p>
                        <Button value='View Schedule' className='px-5 py-4 mb-10'/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Classes;