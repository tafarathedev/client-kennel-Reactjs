import React from 'react'
import Dog from '../Component/Dog'
import useAxiosFetch from '../Hooks/useFetchAxios'
import Pagination from '../Component/Pagination'
import Header from '../Component/Header'
import { Circles } from 'react-loader-spinner'



const  Dogs = () => {
  const {data,loading,error}= useAxiosFetch("https://server-kennel-api-bxaf.onrender.com/dogs")
  const [ dogs ,setDogs] = React.useState([])
  const [currentPage, setCurrentPage ] = React.useState(1)
  const [dogsPerPage ] = React.useState(12)
  //pagination  logic
  const IndexOfLastPage = currentPage * dogsPerPage
  const IndexOfFirstPage = IndexOfLastPage - dogsPerPage
  const currentDogs =  dogs.slice(IndexOfFirstPage,IndexOfLastPage)


  function paginateForward(){
       
      setCurrentPage(prevState=>prevState + 1)
  }
  function paginateBackward(){
       
      setCurrentPage(prevState=>prevState - 1)
  }
  
 //set the data to the state
 React.useEffect(()=>{
   { data && setDogs(data) }

 },[data])
     
  return (  
    <div className='justify-center align-center bg-white overflow-hidden'>
           <Header  title="Dogs on Sale" para="All  Dogs in this store are readilly available."/>
{loading?(  <div className='justify-center align-center bg-white w-full '>
   
         
            {/* loader */}
           <Circles
  height="80"
  width="80"
  color="red"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    
  
    </div>) :(<> 
           <div className="mt-8 max-w-screen-xl  ">
      <p className="text-sm text-right text-gray-500">
        Page(s) <span> {currentPage} </span> / {null?'fetching....':Math.ceil( dogs.length/currentDogs.length)}
      </p>
    </div>

    <div className="grid gap-4 mx-auto justify-center align-center sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        
        <Dog  dogs={currentDogs}/>
    
</div>
   <div className="justify-center align-center text-center w-full mx-6 my-6 ">
   <Pagination
     paginateForward={paginateForward}
     paginateBackward={paginateBackward} 
     currentPage={currentPage}   
     totalDogs={ dogs.length}
     perPage={dogsPerPage}
     />
   </div>
     </>)}
    </div>

      
  )
}

export default  Dogs 