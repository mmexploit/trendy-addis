import React from 'react';
import  Directory  from '../../directory/directory.component';
// import './homepage.styles.css'
import Intro from './intro.component';
import Intro2 from './intro2.component';
import { HomePageContainer } from './homepage.styles';


export const HomePage = () => {
    return (
    <HomePageContainer>
        <Intro/> 
        <Intro2/>
        <Directory/>
       
    </HomePageContainer>
    )
}