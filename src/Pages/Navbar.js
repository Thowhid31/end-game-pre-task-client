import React from 'react';
import todo from '../assets/todo.png'
import { NavLink } from 'react-router-dom';


const Navbar = () => {


    const menuItems = <>
        <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
        <li><NavLink to='/completed' className='rounded-lg'>Completed Task</NavLink></li>
        <li><NavLink to='/to-do' className='rounded-lg'>To-Do</NavLink></li>
        <li><NavLink to='/calender' className='rounded-lg'>Calender</NavLink></li>



    </>
    return (
        <div className="navbar bg-base-100 lg:justify-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='w-12' src={todo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;