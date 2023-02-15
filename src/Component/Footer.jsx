import React from 'react'

const Footer = () => {
  const year = new Date || 2023
      
  return (
    <footer className="footer z-10 footer-center p-4 bg-base-300 text-base-content ">
    <div className='text-center justify-center align-center'>
      <p>Copyright © {year.getFullYear()} - All right reserved by <a href="https://github.com/tafarathedev/">Tafarathedev</a></p>
    </div>
  </footer>
  )
}

export default Footer