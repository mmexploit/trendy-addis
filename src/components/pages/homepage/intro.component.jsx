import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../custom-button/custom-button.component';
import { selectCurrentUser } from '../../../redux/user/user.selector';
import { connect  } from 'react-redux/es/exports'
import {createStructuredSelector} from 'reselect'

import './intro.styles.css'

const Intro = ( {currentUser }) => (
    <div className='intro'>
        <h1 className='intro-title'>Weclome to <br></br> Trendy Addis Online Shopping Site</h1>
        {/* <img className=""src="../../../assets/open-sign.png" alt="" /> */}
        <p className='intro-desc'>A site where you get the all latest products at an affordable price!</p>
        <p className='intro-subtitle'>New User? Sign up now and get trendy!</p>
        {
            currentUser ?
            null :
            <Link id="sign-up-button" to="/signin"><CustomButton >Sign up</CustomButton></Link>
        }
        
        <div className='open'></div>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

    </div>
)

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(Intro);