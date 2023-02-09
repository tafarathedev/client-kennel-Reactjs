import React from 'react'
import {Link} from 'react-router-dom'

const Blog = ({blogs}) => {
    return ( 
        <> 
  {   blogs.map(blog=>{
      return (
            <div className="rounded overflow-hidden shadow-lg">
            <Link to="#"><div className="relative">
              <img src={blog.image} className="w-full"  alt="Sunset in the mountains" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          
              <Link to="!#"><div className="text-sm absolute top-0 right-0 bg-transparent px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3  hover:text-gray-600 transition duration-500 ease-in-out">
                  <span className="font-bold">{blog.day}</span>
                <small>{blog.month}</small>
                </div></Link>
              </div></Link>
            <div className="px-6 py-4">
              <Link to="#" className="font-semibold text-lg inline-block hover:text-gray-600 transition duration-500 ease-in-out"> {blog.title}</Link>
              <p className="text-gray-700 dark:text-white text-sm">
              {blog.desc}
              </p>
            </div>
            <div className="px-6 py-2 flex flex-row items-center">
              <span to="#" className="py-1 text-sm font-regular text-gray-800 mr-1 flex flex-row items-center">
          
                <span className="ml-1">By: </span> Tafara Takaiza</span>
            </div>
          </div>
        )
    })}

    
            </>
  )
}

export default Blog