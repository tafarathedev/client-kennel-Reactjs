import React from 'react'
import { useCart } from 'react-use-cart';
import { useSignOut , useIsAuthenticated, useAuthUser } from 'react-auth-kit'
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
  const auth = useAuthUser()
  const isAuthenticated = useIsAuthenticated()  
  const navigate  = useNavigate()
  const signOut = useSignOut()
   //navbar cart count
   const {
    isEmpty,
    totalUniqueItems,
    cartTotal,
    emptyCart
  } = useCart();

  //handle Logout state
  function handleLogout(){

      signOut()
      navigate('/login' , true)
    
 }
     
  return (
    <div className="navbar z-10 sticky bg-gray-900">
  <div className="flex-1">
  <button data-collapse-toggle="mobile-menu-2" type="button" className="  dropdown-end inline-flex items-center p-2 ml-1 text-sm text-gray-500 dropdown rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-900" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only"></span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <a href="/" className=" lg:mx-10 btn btn-ghost normal-case text-xl">Legacy Kennels</a>
    <div className=" flex-1 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
      <ul className="flex  flex-col p-4 mt-4 border-none  rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-900 bg-transparent md:text-white  md:dark:bg-gray-900 dark:border-none">
        <li>
          <a href="/" className="block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="/">Home</a>
        </li>
        <li>
          <a href="/dogs" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Puppy Store</a>
        </li>
        <li>
          <a href="/products" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pet Supplies</a>
        </li>
        <li>
          <a href="/frequently_asked_questions" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FAQs</a>
        </li>
        
        <li>
          <a href="/blogs" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs </a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
  {isAuthenticated()?   
   (
  <div className="flex-none">
    {/* drop down start */}
   
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
       
           <span className="badge badge-sm indicator-item">{totalUniqueItems}</span>
          
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        
       
        <div className="card-body">
          
          <span className="font-bold text-lg">{totalUniqueItems} items</span>
        <span className="text-info">Subtotal: K{cartTotal}</span>
        <div className="card-actions">
          <a href="/cart" className="btn bg-yellow-600 text-white  btn-block">View cart</a>
        </div>
      </div>
        
      </div>
       
    </div>
    
   
   <div className="dropdown dropdown-end">
      
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar avatar-online">
        <div className="w-10 rounded-full justify-center align-center ">
          <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="profile" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a href="/settings">Settings</a></li>
        <li><a onClick={handleLogout}>Logout </a></li>
      </ul>
    </div>
    
  
  </div>):(
    <div className="w-10 rounded-full justify-center text-white align-center mx-6">
              <a href="/login">Login</a>
    </div>
    )
}
  </div>

  )
}


export default Navbar