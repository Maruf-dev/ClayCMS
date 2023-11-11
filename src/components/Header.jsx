import React from "react";

const Header = ({ name = " default props bu #!#!#!", buttons = [] }) => {
  return(
    <header className="">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 w-full flex justify-between">
       
          <p className="flex items-center">{name}</p>
    
        <div className="flex gap-2">
        {buttons.map((button) => (
          <button className="text-black hover:bg-blue-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-200 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-200">
            {button}
          </button>
        ))}
        </div>
        
      </nav>
    </header>
  );
};

export default Header;
