import React from "react";
import {createBrowserRouter,Route,RouterProvider} from 'react-router-dom'
import CardProject from "../components/cardProject/card-project";
import DashBoard from "../components/dashboard/dashborad";
import HistoryMembers from "../components/dashboard/history-members";
import ListMembersActive from "../components/dashboard/list-members-actives";
import ListProjects from "../components/dashboard/list-projects";

import Home from "../components/home/home";


export const router= createBrowserRouter([
    {
        path:"/",
        element:<Home />  
    },
    {
        path:"/inicio",
        element:<DashBoard />,
        children:[
            {
                path:"/inicio/lista_proyectos",
                element:<ListProjects></ListProjects>
            },
            {
                path:"/inicio/miembros_activos",
                element:<ListMembersActive></ListMembersActive>
            },
            {
                path:"/inicio/historial_miembros",
                element:<HistoryMembers></HistoryMembers>
            
            }
        ]
    }
    ]);