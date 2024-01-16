import React from "react";
import { useParams } from "react-router-dom";
import Header from '../../components/Header';
import "./ClientById.css"
export default function ClientById() {
  const { id } = useParams();

  return (
    <>
      <div className="p-3 border border-black" >
        <div className="">
          <h2>Client: {id}</h2>
          <Header name={""} buttons={["x"]}/>
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-400" />
        <table className="w-full text-sm text-left tableBorder">
          <thead className="text-xs text-black">
            <tr>
              <th scope="row" className="px-6 py-4">Name</th>
              <td className="px-6 py-4">Manafactured Company LTD</td>
            </tr>
            <tr>
              <th scope="row" className="px-6 py-4">INN</th>
              <td className="px-6 py-4">12345678912</td>
            </tr>
            <tr>
              <th scope="row" className="px-6 py-4">Address</th>
              <td className="px-6 py-4">42, Amir Temur street, Sirdaryo,Uzbekiston</td>
            </tr>
            <tr>
              <th scope="row" className="px-6 py-4">Contact</th>
              <td className="px-6 py-4">+998901234567, Sanjar - manager</td>
            </tr>
            <tr>
              <th scope="row" className="px-6 py-4">Clay volume (t/y)</th>
              <td className="px-6 py-4">+998901234567, Sanjar - manager</td>
            </tr>
            <tr>
              <th scope="row" className="px-6 py-4">Bought (t) per q.</th>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4"> 1 000</td>
              <td className="px-6 py-4">2</td>
              <td className="px-6 py-4">2 000</td>
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">4</td>
              <td className="px-6 py-4">0</td>
            </tr>
            <tr>
              <th scope="row" className="px-6 py-4">Clay volume (t/y)</th>
              <td className="px-6 py-4">+998901234567, Sanjar - manager</td>
            </tr>
          </thead>
        </table>
        <div className="clientId__buttons">
        <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-90  font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Edit</button>

        <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-1 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
        </div>
      </div>
      <div className="p-3 border border-black rounded mt-4">
        <h2 className="font-bold text-2xl pb-64">Chat</h2>
      </div>
    </>
  );
}
