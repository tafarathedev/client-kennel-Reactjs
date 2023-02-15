import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import {AuthProvider} from 'react-auth-kit'
import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>                              
    <CartProvider>
          <AuthProvider 
          authType = {'cookie'}
          authName={'token'}
          cookieDomain={window.location.hostname}
          cookieSecure={window.location.protocol === "https:"} >
                   <App/>
         </AuthProvider>
      </CartProvider>
     </BrowserRouter>
  </React.StrictMode>,
)
