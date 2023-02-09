import React from 'react'
import Header from './Header'



const Services = () => {
  return (
    <div>
      
      <section className="bg-white dark:bg-gray-900 text-white dark:text-gray-900 ">
           <Header title="Our Services" para=" Legacy kennels not only provides clients with puppies but also pet grooming services and also the sale of pet supplies as these are very important for a dogs long healthy and happy life at its beloved new home."/>
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-3 lg:px-4 justify-center align-center my-auto">
     
  
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 px-6 py-3 justify-between" >
       
  
        <p
          className="block py-6 px-6 rounded-xl border text-yellow-600 p-12 bg-white shadow-xl transition  hover:shadow-gray-700/10 shadow"
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-yellow-600 select-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
               strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
  
          <h2 className="mt-4 mb-4 text-xl font-bold text-gray-800 dark:text-gray-900 ">Pet Supplies</h2>
  
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-900 ">
          As dog breeders we very much acknowledge how essential every dog needs its pet supplies such as toys, muzzles, chains, shampoo etc. Henceforth our kennel has pet store to help you acquire all that your puppy needs to stay healthy and happy.
          </p>
        </p>
        <p
          className="block py-6 px-6 rounded-xl border text-yellow-600 p-8 bg-white shadow-xl transition hover:border-gray-500/10 shadow"
          href="/services/Vaccinations"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-yellow-600 select-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
               strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
  
          <h2 className="mt-4 mb-4 text-xl font-bold text-gray-800 dark:text-gray-900 ">Dog Grooming</h2>
  
  <p className="mt-1 p-y-4 text-sm text-gray-500 dark:text-gray-900 ">

          With proper pet grooming, you will get rid of shedding, fleas, ticks and various health conditions. Although many dog owners prefer to groom their dogs at home, having your dog professionally groomed can save you time and energy...
          </p>
        </p>
       
      </div>
  
        
    </div>
  </section>
  <br/>
  </div>
  )
}

export default Services