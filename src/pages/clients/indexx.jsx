import React from "react";
import { Route, Routes } from "react-router-dom";
import Clients from './Clients';
import ClientById from "./ClientById";
export default function index() {
  return (
    <Routes>
      <Route path="/clients" element={<Clients />}>
        <Route path="clients/:id" element={<ClientById />} />
      </Route>
    </Routes>
  );
}
