import React from 'react'
import axios from '../api/axios'
import {useCart} from 'react-use-cart'




const Product = ({products}) => {
  const {
    isEmpty,
    totalUniqueItems,
    addItem,
    inCart,
    updateItemQuantity,
    removeItem,
  } = useCart();



  return (
   
    <>
   {
    products.map(product=> {
          const isAlreadyAdded = inCart(product.id)
        return (
        <div className=' w-full my-2 ' key={product._id}>
            
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mx-auto">
        <a href={`/product/${product._id}`} >
        <img src={product.image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        </a>
    <div className="px-4 py-3 w-72">
      
      <p className="text-lg font-bold text-black truncate block capitalize">{product.title}</p>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-black cursor-auhref my-3">K{product.price}</p>
             
          {isAlreadyAdded ? <button disabled={true} type="button" className=" px-4 align-center text-gray-500 text-italic" >Added</button> : <button type="button" onClick={()=> addItem(product)} className=" px-4 align-center text-white" ><svg
      viewBox="0 0 576 512"
      fill="currentColor"
      height="2em"
      width="2em"
      color="Red"
    >
      <path d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h52.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5h328c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zm152 512c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48zM252 160c0-11 9-20 20-20h44V96c0-11 9-20 20-20s20 9 20 20v44h44c11 0 20 9 20 20s-9 20-20 20h-44v44c0 11-9 20-20 20s-20-9-20-20v-44h-44c-11 0-20-9-20-20z" />
    </svg></button> }
      </div>
    </div>

  </div>
  </div>
    )})
   }


 
    </>
  )
}

export default Product