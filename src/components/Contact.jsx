import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  return (
    <div className='h-[590px] md:flex'>
        <div className='w-full md:w-[50%] flex justify-center md:justify-end items-center  pt-10 pb-10 md:pr-0 pl-2 md:pl:0 pr-2'>
            <div className='flex flex-col bg-slate-200 px-6 py-4'>
                <h1 className='text-2xl font-bold'>Get In Touch</h1>
                <p className='text-xl font-semibold mt-2'> Fill in the form to start a conversation</p>
                <p className='mt-4'><pre><FontAwesomeIcon icon={faPhone} className='' />    <b>+91 989876333</b> </pre> </p>
                <p className='mt-2'><pre><FontAwesomeIcon icon={faLocationDot}  />    <b className=' pl-0.5 '>Chopra Farm Khadri</b> </pre> </p>
                <p className='mt-2'><pre><FontAwesomeIcon icon={faEnvelope} />    <b>he@.com</b></pre> </p>
                

            </div>

        </div>
        <div className='w-full md:w-[50%] flex justify-center md:justify-start items-center  pt-10 pb-10 pl-0 md:pr-0'>
        <div className='flex flex-col px-6 py-4'>
                <form>
                  <p><input type='text' placeholder='Enter Your Name' className=' w-[250px]  border-solid border-2 border-b-gray-600 rounded-sm pl-2 pr-2 pt-1 pb-1  ' /></p>
                  <p className='mt-4'><input type='text' placeholder='E-mail' className=' w-[250px] border-solid border-2 border-b-gray-600 rounded-sm pl-2 pr-2 pt-1 pb-1  ' /></p>
                  <p className='mt-4'><input type='text' placeholder='Mobile No.' className=' w-[250px] border-solid border-2 border-b-gray-600 rounded-sm pl-2 pr-2 pt-1 pb-1  ' /></p>
                  <button className='bg-red-700 text-white mt-4 p-2 pl-4 pr-4 rounded-md font-bold '>Submit</button>
                </form>
                

            </div>    
        </div>
      
    </div>
  )
}

export default Contact
