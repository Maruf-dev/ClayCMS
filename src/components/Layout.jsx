import React from "react";
import DefaultSidebar from "./DefaultSidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
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
