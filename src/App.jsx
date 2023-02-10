import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
//import pages
import Dogs from './Pages/Dogs'
import Cart from './Pages/Cart'
import FAQs from './Pages/FAQs'
import Blogs from './pages/Blogs'
import Products from './Pages/Products'
import ProductReview from './Pages/ProductReview'
import Home from './Pages/Home'
import { RequireAuth,useIsAuthenticated } from 'react-auth-kit'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Settings from './Pages/Settings'
import PageNotFound from './Pages/PageNotFound'




function App() {
  const isAuthenticated = useIsAuthenticated()

  return (
    <div className="App font-family: ui-sans-serif, system-ui, -apple-system,flex flex-col h-full justify-between">
      <nav>
         <Navbar/>
      </nav>
      <main>
   {isAuthenticated()?( <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/products" element={<RequireAuth loginPath={'/login'}><Products/></RequireAuth>}/>
        <Route path="/product/:id" element={<RequireAuth loginPath={'/login'}><ProductReview/></RequireAuth>}/>
        <Route path="/dogs" element={<RequireAuth loginPath={'/login'}><Dogs/></RequireAuth>}  />
        <Route path="/cart" element={<RequireAuth loginPath={'/login'}><Cart/></RequireAuth>}/>
        <Route path="/frequently_asked_questions" element={<FAQs/>} />
        <Route path="/blogs" element={<RequireAuth loginPath={'/login'}><Blogs/></RequireAuth>}/>
        <Route path="/settings" element={<RequireAuth loginPath={'/login'}><Settings/></RequireAuth>}/>
  </Routes>):(
    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )}
      </main>
      <footer className=""> 
         <Footer/>
      </footer>
    </div>  
  )
}

export default App
