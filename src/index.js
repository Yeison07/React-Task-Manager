import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider,Route, Routes } from 'react-router-dom';
import  { router} from './App/routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);



