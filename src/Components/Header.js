import React from "react";

function Header() {
  return (
    <div className="container flex justify-between bg-transparent  mx-auto py-4 align-middle">
      <div className="text-red-600 text-4xl font-bold">NETFLIX</div>
      <div className="flex items-center">
        <ul className="flex space-x-4 flex-row text-black">
          <li className="">
            <a className="text-black text-xl font-bold">Home</a>
          </li>
          <li>
            <a className="text-black text-xl font-bold">Details</a>
          </li>
          <li>
            <a className="text-black text-xl font-bold">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
