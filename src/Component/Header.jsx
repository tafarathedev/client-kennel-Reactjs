import React from 'react'

const Header = props => {
  return (
    <div className="bg-trasparent py-1 sm:py-3 lg:py-5">
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div className="bg-gray-100 rounded-lg px-4 py-3 md:py-4 lg:py-8">
        <p className="text-indigo-500 lg:text-lg font-semibold text-center mb-2 md:mb-3 select-none">Introducing</p>
  
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 select-none">{props.title}</h2>
  
        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto select-none">{props.para}</p>
      </div>
    </div>
  </div>
  )
}

export default Header