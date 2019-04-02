import React from 'react';
import './header.css';

const Header  = () => {
    return(
        <div className='header row '>
            <div className='col-sm-100'>
                <h3>Star DB</h3>
            </div>
            <ul className='nav col   justify-content-center'>
                <li className="text-success nav-item ">
                    <a href="#" className="nav-link">People</a></li>
                <li className="text-success nav-item">
                    <a href="#" className="nav-link">Planets</a></li>
                <li className="text-success nav-item">
                    <a href="#" className="nav-link">Starships</a></li>
            </ul>
        </div>
    )
};

export default  Header;