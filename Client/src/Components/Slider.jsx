import React, { useEffect, useState } from 'react'
import image from '../assets/Images/img1.jpg'
import image1 from '../assets/Images/img2.jpg' 
import image2 from '../assets/Images/img3.jpg'
import image3 from '../assets/Images/img4.jpg'

const Slider = () => {
   
  const slides =[
    {src:image   },
      {src:image1   },
        {src:image2   },
           {src:image3  }

   ]
   
  const [currentIndex , setCurrentindex] = useState(0);

  useEffect( () => {
    const interval = setInterval( () => {
      setCurrentindex((prevIndex) => (prevIndex + 1) % slides.length)

    }, 15000) 

    return()=>{

    }
  });
   

  return (
    <div className=' relative '>
       <div className='   '>
        <img src={slides [currentIndex].src} alt="" className='rounded  h-[500px]' />

       </div>
       
    </div>
    
  )
}

export default Slider;
