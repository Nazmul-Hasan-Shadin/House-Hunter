import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
 
    </QueryClientProvider>
    <Toaster />
    </AuthProvider>
  
       
    
  </React.StrictMode>,
)
