import React from "react";

import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import { NavLink, Outlet } from "react-router-dom";

function DefaultSidebar() {
  const navs = [
    { link: "/sidebar/regions", name: "Regions" },
    { link: "/sidebar/clients", name: "Clients" },
    { link: "/sidebar/products", name: "Products" },
    { link: "/sidebar/users", name: "Users" },
  ];
  return (
    <div className="flex">
      <Card className="h-screen w-full max-w-[20rem] p-2 shadow-xl shadow-blue-gray-900/5 flex flex-col">
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
          <div className="flex flex-col">
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
          <div className="bottom-side mt-48">
            <hr className="my-2 border-blue-gray-50" />
            <ListItem className="active:bg-sky-500 rounded">History</ListItem>
            <ListItem className="active:bg-sky-500 rounded">Log Out</ListItem>
          </div>
        </List>
      </Card>
      <div className="border w-full p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultSidebar;
