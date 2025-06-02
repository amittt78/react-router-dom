import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setData] =useState([]);
    useEffect(
        ()=>{
            fetch('https://api.github.com/users/amittt78')
            .then(rdata=> rdata.json())
            .then( jdata=>{
                console.log(jdata);
                setData(jdata);
                
            })
            
        },[]
    );
  return (
    <>
        <div className='w-full h-auto md:flex  pt-20 pb-20 pl-5 pr-5 '>
           <div className=' w-full md:w-1/2 flex items-center justify-center '>
           <img src={data.avatar_url} className='object-cover  ' />
            </div>
            <div className='w-full md:w-1/2 flex flex-col  items-center md:items-start justify-center text-xl lg:text-2xl leading-10 pl-5 pt-10 md:pt-0 '>
                <p>Name:{data.name}</p>
                <p>Location:{data.location}</p>
                <p>Created_At:{data.created_at }</p>
                <p>Updated_At:{data.updated_at}</p>


            </div>           
        </div>
      
    </>
  )
}

export default Github;
