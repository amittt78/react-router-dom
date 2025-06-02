import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className='w-full h-20 flex flex-wrap justify-between  px-2.5 py-2 shadow-[0px_4px_7px_0px_rgba(0,_0,_0,_0.3)]'>
        <div className=' w-[50%] md:w-[33%] flex items-center justify-center'>
         <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" className="mr-3 h-12" alt="Logo"/>
         </div>
         <ul className='md:w-[33%] md:flex hidden items-center justify-center'>
            <li className='lg:mx-5 mx-2 lg:text-2xl text-lg font-bold'> <NavLink to="/" className={({isActive}) => (isActive ? 'text-red-600 ':'')}> Home </NavLink> </li>
            <li className='lg:mx-5 mx-2 lg:text-2xl text-lg font-bold'> <NavLink to="/about" className={({isActive})=> (isActive? ' text-red-600 ':'')}  >About</NavLink></li>
            <li className='lg:mx-5 mx-2 lg:text-2xl text-lg font-bold'><NavLink to="/contact" className={({isActive})=> (isActive? ' text-red-600 ':'')}>Contact</NavLink></li>
            <li className='lg:mx-5 mx-2 lg:text-2xl text-lg font-bold'> <NavLink to="/github" className={({isActive})=> (isActive? ' text-red-600 ':'')}> GitHub </NavLink></li>
         </ul>
         <div className=' md:w-[34%]  md:flex hidden items-center justify-center'>
            <p className='mx-10 lg:text-2xl text-lg font-bold'>Login</p>
            <button className='bg-[#b53110] text-white  lg:text-2xl text-lg px-4 py-1 rounded-md'>Get Started</button>
         </div>

    </nav>
    
       
  )
}

export default Header;
