import React from 'react'

const Question = props => {
  return (
    <div className="border-b">
    <div className="flex justify-between text-black hover:text-indigo-500 active:text-indigo-600 cursor-pointer gap-2 py-4" onClick={props.handleClick} >
      <span className="md:text-lg font-semibold transition duration-100">{props.question}?</span>

      <span className="text-indigo-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </div>

    <p className={`${props.visible} text-gray-500 mb-4`}>{props.answer}</p>
  </div>
  )
}

export default Question