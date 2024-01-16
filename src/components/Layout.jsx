import React from "react";
import DefaultSidebar from "./DefaultSidebar";
import { Navigate, Outlet } from "react-router-dom";

export default function Layout() {
  const token = localStorage.getItem('token');
  if(!token) return <Navigate to="/login" />

  return (
    <div>
      <div className="flex">
        <DefaultSidebar />
        <div className="border w-full p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
