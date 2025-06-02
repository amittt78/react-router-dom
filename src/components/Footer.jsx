import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='pb-7 pt-7 mt-7 shadow-[0px_-4px_7px_0px_rgba(0,_0,_0,_0.3)] '>
      <div className='md:flex md:flex-row md:justify-evenly '>
        <div className='md:w-[30%] w-full flex justify-center'>
            <img src='https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png' className='h-[100px]'/>
        </div>
        <div className='flex flex-col justify-center items-center text-center md:text-left md:flex md:flex-row md:justify-evenly w-full md:w-[70%] '>
            <div className='flex flex-col justify-center'>
                <p className='font-bold text-xl md:text-2xl'>Resources</p>
                <p className='my-3 text-lg md:text-xl'> <Link to="/"> Home </Link></p>
                <p className='text-lg md:text-xl pb-2'><Link to="/about">About</Link> </p>
            </div>
            <div className='flex flex-col justify-center '>
                <p className='font-bold text-xl md:text-2xl'>Follow Us</p>
                <p className='my-3 text-lg md:text-xl'>Github</p>
                <p className='text-lg md:text-xl pb-2'>Discord</p>
            </div>
            <div className='flex flex-col justify-center'>
                <p className='font-bold text-xl md:text-2xl'>Legal</p>
                <p className='my-3 text-lg md:text-xl'>Privacy Policy</p>
                <p className='text-lg md:text-xl'>Terms And Conditions</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer;
