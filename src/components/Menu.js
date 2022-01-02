import React from 'react';
//import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './Menu.css';

const Menu=()=>{
    // const activeStyle={
    //     color: 'green',
    //     fontSize: '2rem'
    // };

    return (
        <div>
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/hrkim">About hrkim</Link></li>
                NavLink에서 activeStyle 삭제됨.
                */}
                <li><NavLink to="/" className={({isActive})=>(isActive?'activeLi':'')}>Home</NavLink></li>
                <li><NavLink to="/about" className={({isActive})=>(isActive?'activeLi':'')}>About</NavLink></li>
                <li><NavLink to="/about/hrkim" className={({isActive})=>(isActive?'activeLi':'')}>About hrkim</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;