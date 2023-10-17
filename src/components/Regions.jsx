import React from "react";
import "./Regions.css";
import Header from "./Header";

function Regions() {
  return (
    <>
      <div className="flex flex-col">
        <Header name="Regions" />
        <div className="flex flex-wrap gap-2 p-2">
          <div className="card ">
            <a
              href="/"
              className="block max-w-sm p-6 bg-white  border-gray-200 rounded-lg shadow hover:bg-gray-100 border-2 "
            >
              <p className="h-28 font-normal text-gray-700 dark:text-gray-900">
                Uzbekistan
              </p>
            </a>
          </div>
          <div className="card ">
            <a
              href="/"
              className="block max-w-sm p-6 bg-white  border-gray-200 rounded-lg shadow hover:bg-gray-100 border-2"
            >
              <p className="h-28 font-normal text-gray-700 dark:text-gray-900">
                Kyrgzstan
              </p>
            </a>
          </div>
          <div className="card ">
            <a
              href="/"
              className="block max-w-sm p-6 bg-white  border-gray-200 rounded-lg shadow hover:bg-gray-100 border-2"
            >
              <p className="h-28 font-normal text-gray-700 dark:text-gray-900">
                Kazakhstan
              </p>
            </a>
          </div>
          <div className="card ">
            <a
              href="/"
              className="block max-w-sm p-6 bg-white  border-gray-200 rounded-lg shadow hover:bg-gray-100 border-2"
            >
              <p className="h-28 font-normal text-gray-700 dark:text-gray-900">
                Turkey
              </p>
            </a>
          </div>
          <div className="card ">
            <a
              href="/"
              className="block max-w-sm p-6 bg-white  border-gray-200 rounded-lg shadow hover:bg-gray-100 border-2"
            >
              <p className="h-28 font-normal text-gray-700 dark:text-gray-900">
                Georgia
              </p>
            </a>
          </div>
          <div className="card ">
            <a
              href="/"
              className="block max-w-sm p-6 bg-white  border-gray-200 rounded-lg shadow hover:bg-gray-100 border-2"
            >
              <p className="h-28 font-normal text-gray-700 dark:text-gray-900">
                Estonia
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Regions;
