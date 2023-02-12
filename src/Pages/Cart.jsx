import React from 'react'
import {useCart} from 'react-use-cart'
import { Link } from 'react-router-dom'
import Header from '../Component/Header';
import {useAuthUser} from 'react-auth-kit'
 import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3'; 



const Cart = () => {
  const auth = useAuthUser()
  
  const {
    isEmpty,
    itemTotal,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();


  const config = {
    public_key: 'FLWPUBK_TEST-b1b508f3889c28fa32723a86765980da-X',
    tx_ref: Date.now(),
    amount: cartTotal,
    currency: 'ZMW',
    payment_options: 'card,mobilemoney',
    customer: {
      email: 'tafaratakaiza19@gmail.com',
      phone_number:'',
      name:auth?auth().laststName:"",
    },
    customizations: {
      title:"Legacy Kennels Dog Breeding",
      description:"",
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    }
  };


  const flutterWaveConfig = {
    ...config,
    text: 'Checkout!',
    callback: (res) => {
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {
      
    },
  };
 

  
 /*  if (isEmpty) return <p>Your cart is empty</p>; */
  return (
   

<div className="bg-white py-6 sm:py-8 lg:py-12">
    
          <Header title="Shopping Cart" para="Your shopping cart contains everything that you have liked from the product store" />
  
          <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
    <div className="flex flex-col gap-4 md:gap-6 mb-6 sm:mb-8">

     {isEmpty?<div className="bg-trasparent py-1 sm:py-3 lg:py-5">
    <div className="w-screen h-screen px-4 md:px-8 mx-auto">
      <div className="bg-transparent rounded-lg px-4 py-3 md:py-4 lg:py-8">
        <br/>
        <br/>
        <br/>
        <h3 className="text-gray-800 text-2xl lg:text-3xl font-italic text-center mb-4 md:mb-6 select-auto">Your Cart is Empty</h3>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  </div>:(
        <>
         {
          items.map(item=>{
                     return(
              <div key={item.id} className="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
   <Link to="/product_details" className="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative">
   <img src={item.image} loading="lazy" alt="Photo by Thái An" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
   </Link>

   <div className="flex flex-col justify-between flex-1 py-4">
     <div>
       <Link to="#" className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">{item.name}</Link>

       <span className="block text-gray-500">Size: S</span>
       <span className="block text-gray-500">Color: Black</span>
     </div>
   
     <div>
       <span className="block text-gray-800 md:text-lg font-bold mb-1">K{item.price} For Each </span>

       <span className="flex items-center text-gray-500 text-sm gap-1">
         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
         </svg>
         In stock
       </span>
     </div>
   </div>

   <div className="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
     <div className="flex flex-col items-center gap-2">
       <div className="w-20 h-12 flex border rounded overflow-hidden">

         <input type="button" disabled={true} value={item.quantity} className="w-full focus:ring ring-inset outline-none transition duration-100 px-4 py-2" />
         <div className="flex flex-col border-l divide-y">
           <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none transition duration-100">+</button>
           <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none transition duration-100">-</button>
         </div>
       </div>
     <br className='my-6 py-6'/>
       <button onClick={()=>{removeItem(item.id)}} className="text-yellow-600 hover:text-red-600 active:text-indigo-700 text-sm font-semibold  transition duration-100"> <svg
       viewBox="0 0 448 512"
       fill="currentColor"
       height="1.5em"
       width="1.5em"
       color='red'>
        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96l7.2-14.3zM32 128h384v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
 </svg></button>
     </div>

     <div className="pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
       <span className="block text-gray-800 md:text-lg font-bold">K{item.itemTotal}</span>
     </div> 
   </div>
 </div>  
            )
          })
         }
        
        </>
  )}
  
    </div>
    {
      !isEmpty && <div className="flex flex-col items-end gap-4">
      <div className="w-full sm:max-w-xs bg-gray-100 rounded-lg p-4">
        <div className="space-y-1">
          <div className="flex justify-between text-gray-500 gap-4">
            <span>Subtotal</span>
            <span>K{cartTotal}</span>
          </div>

         {/*  <div className="flex justify-between text-gray-500 gap-4">
            <span>Shipping</span>
            <span>K4.99</span>
          </div> */}
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-start text-gray-800 gap-4">
            <span className="text-lg font-bold">Total</span>

            <span className="flex flex-col items-end">
              <span className="text-lg font-bold">K{cartTotal} ZMW</span>
              <span className="text-gray-500 text-sm">including VAT</span>
            </span>
          </div>
        </div>
      </div>

      <FlutterWaveButton
      className="inline-block bg-yellow-600 hover:bg-yellow-500 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
      {...flutterWaveConfig} /> 
    </div>
    }
  </div>
</div>

    )
  }
  
  export default Cart
  