import React from 'react'
import Heading from './Header'
import {Link} from 'react-router-dom'



const About_us = () => {
 
  return (
    <div>
      <section className="bg-white dark:bg-white text-white dark:text-gray-900">
    <Heading title="About Us" para="we are many things related to a dog business site"/>
    <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <p className="mt-4  text-white dark:text-gray-900">
        </p>
      </div>
      <div className=" mt-9 bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <div>
        <div className="h-4/2 md:h-auto bg-gray-100 align-center justify-center overflow-hidden rounded-lg shadow-lg">
          <img  src="https://images.unsplash.com/photo-1598079253422-638fa9b2d160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=200" loading="lazy" alt="pitbull" className="w-full h-full object-cover object-center" />
        </div>
      </div>
      <div className="md:pt-8">
        <p className="text-yellow-600 font-bold text-center md:text-left select-none">Who we are</p>

        <h1 className="select-none text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">Our competitive advantage</h1>

        <p className="text-gray-500 sm:text-lg mb-6 md:mb-8 select-none">
        It’s one thing to say you have good dog breeders, but it’s another thing to prove and promise it! Finding the right puppy is a lot like falling in love. when you know, you just know! Every single one of the customers we agree that it’s the puppy’s health, happiness, and well being that matters most. <br /><br />

          At legacy kennels we don’t just sell puppies to the first person to show up with cash in hand. Just like how you want a breeder to take optimal care of your future puppy, good breeders want to ensure they’re sending their pups home with a family who will love them well for the rest of their lives! For this reason, the ethical dog breeding at Legacy kennels reserve the right to deny the sale to anyone they suspect may be unfit to do so.</p>{/*  By keeping this rule in place, we believe we can help puppies, customers, and our kennel have the best possible experience.
         This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <a href="#" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 underline transition duration-100">random</a> or otherwise generatd to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text. 
         */}

        <h2 className="select-none text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">About us</h2>

        <p className="select-auto text-gray-500 sm:text-lg mb-6 md:mb-8">We are currently breeders of the mighty majestic South African Boerboel dog breed. On our team is a veterinarian and a biologist with a dedicated team of workers who insure the kennel is clean and disease free. At <Link to="/" className="text-indigo-600 text-bold">Legacy kennel</Link> we dont breed and hope for the best, there is an extremely vigorous selection process that is carried out, by ourselves, regarding temperament and conformation before any animal is selected to breed with them. Our boerboels are very well socialized and although their natural guarding instincts are very much still there, once introduced to new people and new things, in the correct manner, they are accepting with minimal fuss.</p> 
      </div>
    </div>
  </div>
</div>
        
    </div>
  </section>
  </div>
  )
}

export default About_us