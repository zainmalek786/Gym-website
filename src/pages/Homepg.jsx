import React from 'react';
import Home from '../components/Home'
import About from '../components/About'
import Classes from '../components/Classes'
import Schedule  from '../components/Schedule/Schedule';
import Contact from '../components/Contact';

function Homepg() {
    return (<>
    <Home/>
    <About/>
    <Classes/>
    <Schedule/>
    <Contact/>
    </>  );
}

export default Homepg;