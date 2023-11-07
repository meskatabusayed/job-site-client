import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'







import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
   </React.StrictMode>,
  </div>
)
