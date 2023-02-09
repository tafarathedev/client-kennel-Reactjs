import React from 'react'
import Product from '../Component/Product'
import useAxiosFetch from '../Hooks/useFetchAxios'
import Pagination from '../Component/Pagination'
import Header from '../Component/Header'




const Products = () => {
  const [products ,setProducts] = React.useState([])
  const [currentPage, setCurrentPage ] = React.useState(1)
  const [productPerPage ] = React.useState(12)
  const {data,loading,error}= useAxiosFetch(`http://localhost:5050/products`)
  //pagination  logic
  const IndexOfLastPage = currentPage * productPerPage
  const IndexOfFirstPage = IndexOfLastPage - productPerPage
  const currentProduct = products.slice(IndexOfFirstPage,IndexOfLastPage)

     
  



  function paginateForward(){
     setCurrentPage(prevState=>prevState + 1)
  }
  function paginateBackward(){
       
     setCurrentPage(prevState=>prevState - 1)
  }
  
 //set the data to the state
 
 React.useEffect(()=>{
   { data && setProducts(data)}
   
 },[data])




  return (  
    <div className='justify-center align-center bg-white overflow-hidden'>
           <Header  title="Pet Supplies" para="All products in this store are only dog related."/>

           <div className="mt-8 max-w-screen-xl  ">
      <p className="text-sm text-right text-gray-500">
        Page(s) <span> {currentPage} </span>of  {Math.ceil(products.length/productPerPage)}
      </p>
    </div>
    <div className="grid gap-4 mx-auto justify-center align-center sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <Product products={currentProduct} handleAdd={(e) => addToCart(product._id, 1)}/>
</div>
   <div className="justify-center align-center text-center w-full mx-6 my-6 ">
   <Pagination
     paginateForward={paginateForward}
     paginateBackward={paginateBackward} 
     currentPage={currentPage}   
     total={products.length}
     perPage={productPerPage}
     IndexOfLastPage={IndexOfLastPage}
     
     />
   </div>
  
    </div>
  )
}

export default Products