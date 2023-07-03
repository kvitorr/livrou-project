import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './Router';
import { ShowMenuProvider } from './contexts/MenuContext';
import { ShowFilterProvider } from './contexts/FilterContext';
import { AuthProvider } from './contexts/AuthContext';
import { ShowLoginModalProvider } from './contexts/LoginModalContext';
import { ShowRegisterModalProvider } from './contexts/RegisterModalContext';
import { FilterQueryProvider } from './contexts/FilterQueryContext';
import { ShowAnnouncementModalProvider } from './contexts/AnnouncementModalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ShowAnnouncementModalProvider>
          <FilterQueryProvider>
            <ShowRegisterModalProvider>
              <ShowLoginModalProvider>
                <ShowMenuProvider>
                  <ShowFilterProvider>
                    <RouterProvider router={router}/>
                  </ShowFilterProvider>
                </ShowMenuProvider>
              </ShowLoginModalProvider>
            </ShowRegisterModalProvider>
          </FilterQueryProvider>
      </ShowAnnouncementModalProvider>
    </AuthProvider>
  </React.StrictMode>
)
