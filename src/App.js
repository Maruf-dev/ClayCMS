import React from "react";
// import { ReactDOM } from 'react';
import "./App.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import DefaultSidebar from "./components/DefaultSidebar";
import Regions from "./pages/regions/Regions";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Auth from "./pages/register/Auth";
import Register from "./pages/register/Register";
import Layout from "./components/Layout";

// import data from "./api/data";
import Clients from './pages/clients/Clients';
import ClientById from './pages/clients/ClientById';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "regions",
        element: <Regions />,
      },
      {
        path: "clients",
        element: <Clients />,

      },
      {
        path: "clients/:id",
        element: <ClientById />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/login",
    element: <Auth />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
