import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EstadoLogin from './MyContext/EstadoLogin.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}>
    <EstadoLogin>
    <App />
    </EstadoLogin>
    </RouterProvider>
    
  </StrictMode>,
)
