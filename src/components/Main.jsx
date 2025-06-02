import React from 'react';

function Main() {
  return (
    <>
    <div className='w-full h-auto md:flex  items-center justify-center p-4 '>
      <div className='flex items-center justify-center w-full md:w-[50%] '>
      <img className=" w-2xl object-cover" src="https://thumbs.dreamstime.com/b/person-sitting-computer-desk-woman-correct-back-posture-chair-working-desktop-table-girl-good-ergonomic-workplace-flat-277086568.jpg" alt="image1" />

      </div>
      <div className=' flex flex-row justify-center items-center text-center md:text-right w-full md:w-[50%] pr-3 '>
        <div>
        <h1 className='font-bold text-3xl md:text-5xl '>Download Now</h1>
        <p className='font-bold text-3xl md:text-5xl block text-center my-2 md:text-right'>  Loren Ipsum</p>
        <button className='flex mx-auto md:float-end bg-[#b53110] text-white  text-2xl md:text-4xl font-bold  my-5 px-6 py-3 rounded-md'>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" 
  height="24" 
  fill="white" className='mt-1 mr-3'> 
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
          </svg> Download Now</button>
      </div>
      </div>
      
      
    </div>
    <div className=' w-full h-auto my-4 flex flex-col flex-wrap items-center justify-center px-2 mb-9 pb-5' >
        <img className='object-cover h-[300px] w-[300px] md:h-[500px] md:w-[500px] ' src='https://img.freepik.com/premium-vector/boy-sits-desk-with-laptop-pencils-boy-doing-homework-vector-illustration_851674-85088.jpg'
        />
        <h1 className='font-bold text-3xl md:text-5xl my-2 text-center'>Lorem Ipsum Yolo</h1>

      </div>
    </>
  )
}

export default Main;
