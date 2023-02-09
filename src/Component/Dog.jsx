import React from 'react'
import {Link} from 'react-router-dom'
const Dog = ({dogs}) => {
   
    
  return (
    <>
   {
   
     dogs.map(dog=> {
   console.log("here: "+dog)
        return (
        <div className=' w-full my-2 ' key={dog._id}>
            
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mx-auto">
        <a href={`/dog/${dog._id}`} >
        <img src={dog.image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        </a>
    <div className="px-4 py-3 w-72">
      
      <p className="text-lg font-bold text-black truncate block capitalize">{dog.name}</p>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-black cursor-auhref my-3">{dog.gender}</p>
             
          <button className="btn  btn-warning text-white">+86-132-5282-7309</button>
      </div>
    </div>

  </div>
  </div>
    )})
   }


 
    </>
  )
}

export default Dog