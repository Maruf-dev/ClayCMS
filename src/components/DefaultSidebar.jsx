import React from "react";

import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import { NavLink, Route, Routes } from "react-router-dom";
import Clients from "./clients/Clients";
import Regions from "./Regions";
import Products from "./Products";
import Users from "./Users";

function DefaultSidebar() {
  return (
    <>
      <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 sidebar">
        <div className="mb-2 p-4">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-semibold text-lg "
          >
            ClayCMS{" "}
            <span class="ml-4 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-500 dark:text-green-50">
              admin
            </span>
          </Typography>
        </div>

        <List className="sidebar">
          <div className="top-side">
            <ListItem className="active:bg-sky-500 rounded">
              <NavLink
                to="/Regions"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white" : ""
                }
              >
                Regions
              </NavLink>
            </ListItem>
            <ListItem className="active:bg-sky-500 rounded">
              <NavLink to="/Clients">Clients</NavLink>
            </ListItem>
            <ListItem className="active:bg-sky-500 rounded">
              <NavLink to="/Products">Products</NavLink>
            </ListItem>
            <ListItem className="active:bg-sky-500 rounded mb-96">
              <NavLink to="/Users">Users</NavLink>
            </ListItem>
            <NavLink
              to="/Users"
              className={({ isActive }) => (isActive ? "bg-sky-500" : "")}
            >
              <ListItem>
                Users
              </ListItem>
            </NavLink>
          </div>
          <div className="bottom-side">
            <hr className="my-2 border-blue-gray-50" />
            <ListItem className="active:bg-sky-500 rounded ">History</ListItem>
            <ListItem className="active:bg-sky-500 rounded">Log Out</ListItem>
          </div>
        </List>
      </Card>
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default DefaultSidebar;
