import React from "react";

const Header = ({name=" default props bu #!#!#!"}) => {
  return (
  <header className="">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 w-full border flex justify-between">
      <div className="border">
        <p>{name}</p>
        
      </div>
      <div className="border">+  -</div>
    </nav>
  </header>
  );
}

export default Header;
