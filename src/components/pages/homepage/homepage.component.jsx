import React from 'react';
import  Directory  from '../../directory/directory.component';
import './homepage.styles.css'
import Intro from './intro.component';


export const HomePage = () => {
    return (
    <div className="homepage">
        <Intro/>
        <Directory/>
    </div>
    )
}