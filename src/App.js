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

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <DefaultSidebar />

        <Routes>
          <Route path="/clients" element={<Clients />}>
            <Route index element={<ClientsList />} />
            <Route path=":id" element={<ClientById />} />
          </Route>
          <Route path="/regions" element={<Regions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
