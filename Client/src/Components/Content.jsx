import React from 'react'
import Button from './Button'

const Content = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-2 text-white  '>
      {/* Heading */}
      <h1 className='text-7xl  text-yellow-400 font-extrabold uppercase translate-y-14'>
        Track. Train. Transform
      </h1>

      {/* Paragraph */}
      <p className='text-2xl text-gray-200   ml-40  translate-y-12 '>
        From workouts to meal plans — <span className="text-yellow-400">FitLab</span> keeps your fitness goals on track.
      </p>
      <Button/>
    </div>
  )
}

export default Content
