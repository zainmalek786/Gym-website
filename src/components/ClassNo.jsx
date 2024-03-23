import React from 'react';
import Icon from '@mdi/react';
import { mdiDumbbell } from '@mdi/js';


function ClassNo({text="First Training class"}) {
    return ( 

        <div className='mx-auto md:w-3/5 w-4/6 flex items-center py-6 bg-slate-50 justify-center gap-5 shadow-sm shadow-gray-400 my-8'>

<Icon path={mdiDumbbell}
        title="User Profile"
        size={2}
        // horizontal
        // vertical
        rotate={90}
        color="red"
        // spin
      />
      
{/* <Icon path={mdiDumbbell} size={1} /> */}

           <p className='text-2xl font-semibold'>{text}</p>

        </div>
     );
}

export default ClassNo;