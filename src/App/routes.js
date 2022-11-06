import React from "react";
import {createBrowserRouter,Route,RouterProvider} from 'react-router-dom'
import DashBoard from "../components/dashboard/dashboard";
import Home from "../components/home/home";
import SideBar from "../components/sidebar/sidebar";

export const router= createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/inicio/listado_proyectos",
        element:<DashBoard></DashBoard>
    }
    ]);