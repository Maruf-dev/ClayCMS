import React, { useState } from "react";

import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import { NavLink, Route, Routes } from "react-router-dom";
import Clients from "./clients/Clients";
import Regions from "./Regions";
import Products from "./Products";
import Users from "./Users";

function DefaultSidebar() {
  const navs = [
    { link: "/regions", name: "Regions" },
    { link: "/clients", name: "Clients" },
    { link: "/products", name: "Products" },
    { link: "/users", name: "Users" },
  ];
  return (
    <>
      <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 flex flex-col">
        <div className="mb-2 p-4 ">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-semibold text-lg "
          >
            ClayCMS{" "}
            <span className="ml-4 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-500 dark:text-green-50">
              admin
            </span>
          </Typography>
        </div>

        <List className="">
          <div className="flex flex-col gap-1">
            {navs.map((n) => (
              <ListItem className="">
                <NavLink
                  to={n.link}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-400 w-full p-2 text-white rounded"
                      : "w-full p-2 text-black rounded "
                  }
                >
                  {n.name}
                </NavLink>
              </ListItem>
            ))}
          </div>
          <div className="bottom-side">
            <hr className="my-2 border-blue-gray-50" />
            <ListItem className="active:bg-sky-500 rounded ">History</ListItem>
            <ListItem className="active:bg-sky-500 rounded">Log Out</ListItem>
          </div>
        </List>
      </Card>
    </>
  );
}

export default DefaultSidebar;
