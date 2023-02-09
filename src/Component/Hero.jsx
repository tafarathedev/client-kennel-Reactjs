import React from 'react'
import {Link } from 'react-router-dom'
import backgroundVideo from '../assets/bg2.mp4'

const Hero = () => {
  return (
    <div
    className="relative flex items-center justify-center align-center h-5/6 mb-12 overflow-hidden inset-0 backdrop-blur-sm bg-white/30"
  >
   
    <div
      className="relative z-30 p-5 m-auto text-2xl text-white bg-none bg-opacity-75 rounded-xl"
    >
        {/* hero content */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h1
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl select-none"
        >
          Legacy Kennels
  
          <span className="sm:block"> Dog Breeding . </span>
        </h1>
  
        <p className="mx-auto mt-10 max-w-xl sm:text-xl sm:leading-relaxed select-none">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
          tenetur fuga ducimus numquam ea!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="block w-5/6 rounded text-center  bg-yellow-600 hover:bg-deep-purple-accent-700 px-12 py-3 text-sm font-medium text-white hover:animate-pulse hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            to="/dogs"
          >
            Puppy Store
          </Link>
  
          <Link
            className="block w-5/6 rounded bg-yellow-600 text-center hover:bg-deep-purple-accent-700 px-12 py-3 text-sm font-medium text-white hover:animate-pulse focus:outline-none focus:ring active:bg-gray-900 sm:w-auto"
            to="/products"
          >
           Product Store
          </Link>
        </div>
          </div>
        </div>
    </div>
    <video
      autoPlay
      loop
      muted
      className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50"
    >
      <source
        src={backgroundVideo}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  x
  </div>
  )
}

export default Hero