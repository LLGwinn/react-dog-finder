import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

/** Nav bar with all dog names as links to detail pages. */

function Nav( {dogNames} ) {
    return (
        <nav className='Nav'>
            <NavLink exact to='/dogs'>Home</NavLink>
            {dogNames.map( name => {
                return (
                    <NavLink exact to={`/dogs/${name}`} key={name}>{name}</NavLink> 
                )
            })}
        </nav>
    )
}

export default Nav;