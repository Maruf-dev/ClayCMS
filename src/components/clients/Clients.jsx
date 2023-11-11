import React from "react";
import "./Clients.css";
import Header from "./../Header";
import { Link } from "react-router-dom";
import {TiMessages} from "react-icons/ti";


function Clients() {
  return (
    <div className="clients">
      <Header name="Client" buttons={["+"]}/>
      

      <div className="relative overflow-x-auto">

      {/* <Link to="1">c321c312c3</Link>  */}
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-black">
            <tr className="">
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Region
              </th>
              <th scope="col" className="px-6 py-3">
                Product type
              </th>
              <th scope="col" className="px-6 py-3">
                Factory capacity
              </th>
              <th scope="col" className="px-6 py-3">
                Dipsatched for Quarter
              </th>
              <th scope="col" className="px-6 py-3">
                Dispasched Total
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border dark:border-black">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                1
              </th>
              <td className="px-6 py-4"><Link to="Manafactured Company LTD">Manafactured Company LTD</Link> </td>
              <td className="px-6 py-4">Sirdaryo</td>
              <td className="px-6 py-4">Edible oil</td>
              <td className="px-6 py-4">15 000</td>
              <td className="px-6 py-4">1 000</td>
              <td className="px-6 py-4">5 000</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">Delete</td>
            </tr>
            <tr className="bg-white border dark:border-black">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                
              </th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
            <tr className="bg-white border dark:border-black">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                
              </th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
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
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
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
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
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
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
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
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <TiMessages size={40} className="timessage hover:bg-slate-200 focus:ring-blue-300 rounded-ss"/>
    </div>
  );
}

export default Clients;
