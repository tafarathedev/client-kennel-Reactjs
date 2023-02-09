import React from 'react'
import Header from './Header'

const Testimonial = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
       <Header title="What Others Say About Us"  para="A few of our clients had a few words to say to us, this is what they said ab out our dogs "/>
    <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
      
          <div className="flex flex-col items-center bg-gray-900 rounded-lg gap-4 md:gap-6 px-8 py-6">
          <div className="max-w-md text-white lg:text-lg text-center">“This is a section of some simple filler text, also known as placeholder text.”</div>
  
          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
            <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by unsplash" className="w-full h-full object-cover object-center" />
            </div>
  
            <div>
              <div className="text-white text-sm md:text-base font-bold text-center sm:text-left">Tafara Takaiza</div>
              <p className="text-yellow-600 text-sm md:text-sm text-center sm:text-left">Title / Title</p>
            </div>
          </div>
        </div>
     
        <div className="flex flex-col items-center bg-gray-900 rounded-lg gap-4 md:gap-6 px-8 py-6">
          <div className="max-w-md text-white lg:text-lg text-center">“This is a section of some simple filler text, also known as placeholder text.”</div>
  
          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
            <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by christian ferrer" className="w-full h-full object-cover object-center" />
            </div>
  
            <div>
              <div className="text-white text-sm md:text-base font-bold text-center sm:text-left">someone </div>
              <p className="text-yellow-600 text-sm md:text-sm text-center sm:text-left">CFO / Dashdash</p>
            </div>
          </div>
        </div> 
    
      </div>
    </div>
  </div>
  )
}

export default Testimonial