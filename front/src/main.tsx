import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './Router';
import { ShowMenuProvider } from './contexts/MenuContext';
import { ShowFilterProvider } from './contexts/FilterContext';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ShowMenuProvider>
    <ShowFilterProvider>
      <RouterProvider router={router}/>
    </ShowFilterProvider>
    </ShowMenuProvider>
  </React.StrictMode>,
)
