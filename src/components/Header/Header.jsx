import React from "react";

function Header() {
  return (
    <div className="bg-green-200 p-5  mx-auto flex flex-row justify-between items-center ">
      <img src="/public/owl.jpg" alt="My Image" className=" w-20 h-20" />
      <h2 className="text-2xl lg:text-4xl">Tell Me</h2>
    </div>
  );
}

export default Header;
