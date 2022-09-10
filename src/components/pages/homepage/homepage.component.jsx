import React from 'react';
import  Directory  from '../../directory/directory.component';
import './homepage.styles.css'
import Intro from './intro.component';
import Intro2 from './intro2.component';


export const HomePage = () => {
    return (
    <div className="homepage">
        <Intro/> 
        <Intro2/>
        <Directory/>
       
    </div>
    )
}