import React from "react";
// import { ReactDOM } from 'react';
import "./App.css";
import DefaultSidebar from "./components/DefaultSidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from "./components/clients";
import ClientsList from "./components/clients/Clients";
import Regions from "./components/Regions";
import Products from "./components/Products";
import Users from "./components/Users";
import ClientById from "./components/clients/ClientById";
import Auth from "./components/pages/Auth";
import Register from "./components/pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/sidebar" element={<DefaultSidebar />}>
          <Route path="clients" element={<ClientsList />} />
          <Route path="clients/:id" element={<ClientById />} />
          <Route path="" element={<Regions />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
