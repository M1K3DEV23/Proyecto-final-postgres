import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToastContainer autoClose={3000} position='top-center' pauseOnFocusLoss={false} pauseOnHover={false} />
  </StrictMode>,
)
