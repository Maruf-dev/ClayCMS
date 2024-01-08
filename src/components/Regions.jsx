import React from "react";
import "./Regions.css";
import Header from "./Header";
import { HiOutlineUsers } from "react-icons/hi2";

function Regions() {
  const regions = [
    { country: "Uzbekistan",clients: 0,},
    { country: "Kyrgzstan",clients: 0 },
    { country: "Kazakhstan", clients: 18, sales: [3, 12, 0, 0] },
    { country: "Turkey",clients: 0 },
    { country: "Georgia",clients: 0 },
    { country: "Estonia",clients: 0 },
  ];
  
  return (
    <>
    
      <div className="flex flex-col">
        <Header name="Regions" buttons={["+","-"]}/>
        <div className="flex flex-wrap gap-2 p-2">
          {regions.map((region) => (
            <div className="border w-80 h-60 hover:bg-gray-100 bg-white border-gray-200 rounded-lg">
              <a
                href="/"
                className="block  p-6"
              >
                <p className="h-28 font-normal text-gray-700 dark:text-gray-900">
                    
                </p>
                <div className="calc">
                  <div className="wrap-user-total flex gap-3">
                    <div className="total-users inline-flex gap-1 border rounded p-2">
                      {" "}
                      <HiOutlineUsers size={20}/> {region.clients}
                    </div>
                    <div className="total-sales border p-1">Total sales : {region?.sales?.reduce((a,v) =>  a = a + v.prix , 0 )||0} t.</div>
                  </div>
                  <div className="amount border mt-3"><span className="border-r px-5">{}3 t.</span><span className="border-r px-5">{}12 t.</span></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Regions;
