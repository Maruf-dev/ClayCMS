import React from "react";
import Header from "./Header";


function Products() {
  
  return (
    
    <>
        <Header name="Products" buttons={["+"]} />
        <table className="w-full text-sm text-left tableBorder">
          <thead className="text-xs text-black">
            <tr className="">
              <th scope="col" className="px-6 py-3 w-6">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Unit
              </th>
              <th scope="col" className="px-6 py-3">
                Other
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border dark:border-black">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
            <tr className="bg-white border dark:border-black">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap "
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
            <tr className="bg-white dark:border-black">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
              ></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
          </tbody>
        </table>

    </>
  );
}

export default Products;
