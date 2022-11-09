import React from 'react';
import navLogo from '../images/navLogo.png';
import '../style.css';

export default function Nav(){
    return(
        <div className='navbar'>
            <img className='navLogo' src={navLogo} alt='logo'></img>
            <h1 className='navTitle'>my traveling journal.</h1>
        </div>
    )
}