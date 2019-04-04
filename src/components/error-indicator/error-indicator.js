import React from 'react';
import './error-indicator.css';
import image from './sad-image.png';

const ErrorIndicator = () =>{
    return(
        <div className='error-indicator'>
            <div>Ohhh!</div>
            <div>Something has gone wrong</div>
            <img src={image} alt="sad smile"/>
        </div>
    )
};

export default ErrorIndicator;