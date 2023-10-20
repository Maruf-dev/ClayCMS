import React from "react";
import { useParams } from "react-router-dom";

export default function ClientById() {
  const { id } = useParams();

  return (
    <>
      <div className="clinet-card border rounded p-3">
        <h1>Client: {id}</h1>
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
      </div>
      <div className="p-3 border border-black rounded mt-4">
        <h2 className="font-bold text-2xl pb-64">Chat</h2>
      </div>
    </>
  );
}
