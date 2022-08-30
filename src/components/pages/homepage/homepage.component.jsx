import React from 'react';
import { Directory } from '../../directory/directory.component';
import { MenuItem } from '../../menu-item/menu-item.component';
import './homepage.styles.css'

export const HomePage = () => {
    return (
    <div className="homepage">
        <Directory/>
    </div>
    )
}