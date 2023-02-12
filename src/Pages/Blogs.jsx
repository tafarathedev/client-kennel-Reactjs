import React from 'react'
import Header from '../Component/Header'
 import Blog from '../Component/Blog'
import useFetchAxios from '../Hooks/useFetchAxios'
import Pagination from '../Component/Pagination'



const Blogs = () => {
const {data,loading,error}= useFetchAxios("https://server-kennel-api-bxaf.onrender.com/blogs")
  let [blogs , setBlogs] = React.useState([])

  const [currentPage, setCurrentPage ] = React.useState(1)
  const [blogPerPage ] = React.useState(6)
  //pagination  logic
  const IndexOfLastPage = currentPage * blogPerPage
  const IndexOfFirstPage = IndexOfLastPage - blogPerPage
  const currentBlog = blogs.slice(IndexOfFirstPage,IndexOfLastPage)


  
  function paginateForward(){setCurrentPage(prevState=>prevState + 1)}
  function paginateBackward(){ setCurrentPage(prevState=>prevState - 1)}


  React.useEffect(()=>{
    { data && setBlogs(data) }
  },[data])
     

return (
    <div className='overflow-hidden'> 

        
    <Header title="Blogs" para="Here we provide you with weekly blogs concerning dogs in general. Feel free every week to come through and gain some knowledge about dogs which in return will help make you an excellent and responsible pet owner." />
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
   
  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
 <Blog blogs={currentBlog} />
    
  </div>
</div>
<div className="justify-center align-center text-center w-full mx-6 my-6 ">
   <Pagination
     paginateForward={paginateForward}
     paginateBackward={paginateBackward} 
     currentPage={currentPage}   
     total={blogs.length}
     perPage={blogPerPage}
     />
   </div>
  </div>
  )
}

export default Blogs