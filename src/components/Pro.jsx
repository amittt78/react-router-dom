import React from 'react'
import { useParams } from 'react-router-dom'

function Pro() {
    const {id}=useParams();
  return (
    
    <div>
      <h1 className='text-5xl text-center'>{id}</h1>
    </div>
  )
}

export default Pro;
