import React from 'react';

function About() {
  return (
    <>
    <div className=' w-full h-auto py-30 lg:px-8 xl:px-20 md:flex md:flex-row md:items-center md:justify-center pt-16 '>
        <div className=' w-full md:w-[50%] xl:w-[40%] flex justify-center '>
            <img src="https://3dskyfree.com/wp-content/uploads/home-office-set-office-furniture-349-3d-model.webp"
            className='h-[400px] rounded px-2' />
        </div>
        <div className=' w-full md:w-[50%] xl:w-[60%] px-5 flex flex-col mt-5 mx-auto  '>
            <h2 className='font-semibold text-2xl '>React development is carried out by passionate developers</h2>
            <p className="mt-6 text-gray-600 text-xl">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600 text-xl">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
        </div>
        
    </div>
      
    </>
  )
}

export default About
