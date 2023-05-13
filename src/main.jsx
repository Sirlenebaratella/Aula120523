import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './pages/sobre'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/sobre',
      element: <Sobre />
    },
    {
      path: '/create',
      element: <create />
    }

  ])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)

