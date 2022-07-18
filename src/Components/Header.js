import React from "react";

function Header() {
  return (
    <div className="container flex justify-between bg-transparent  mx-auto py-2 ">
      <div className="text-red-600 text-4xl font-bold">NETFLIX</div>
      <div className="flex items-center">
        <button className=" border-red-600 px-4 py-2 rounded bg-white text-red-600 text-xl font-bold">
          Login
        </button>
        <button className="px-4 py-2 mr-4 rounded bg-red-600">Signup</button>
      </div>
    </div>
  );
}

export default Header;
