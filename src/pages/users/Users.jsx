import React from "react";
import Header from './../../components/Header';

function Users() {
  return (
    <div className="users">
      <Header name="Users" buttons={["+"]}/>
      <table className="w-full text-sm text-left tableBorder">
        <thead className="text-xs text-black">
          <tr className="">
            <th scope="col" className="px-6 py-3 w-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Regin
            </th>
            <th scope="col" className="px-6 py-3">
              Contact number
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border dark:border-black">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              1
            </th>
            <td className="px-6 py-4">Firsname Surname</td>
            <td className="px-6 py-4">Manager</td>
            <td className="px-6 py-4">KZ</td>
            <td className="px-6 py-4">+998931234567</td>
            <td className="px-6 py-4">Edit</td>
            <td className="px-6 py-4">Delete</td>
          </tr>
          <tr className="bg-white border dark:border-black">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap "
            >
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
          </tr>
          <tr className="bg-white dark:border-black">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            >
              
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Users;
