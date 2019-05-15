import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header  = () => {
    return(
        <div className='header row '>
            <div className='col-sm-100'>
                <h3>
                    <Link to='/' className="nav-link">Star DB</Link>
                </h3>
            </div>
            <ul className='nav col   justify-content-center'>
                <li className="text-success nav-item ">
                    <Link to='/people'  className="nav-link">People</Link></li>
                <li className="text-success nav-item">
                    <Link to='/planets'  className="nav-link">Planets</Link></li>
                <li className="text-success nav-item">
                    <Link to='/starships'  className="nav-link">Starships</Link></li>
            </ul>
        </div>
    )
};

export default  Header;