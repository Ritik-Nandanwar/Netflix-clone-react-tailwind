import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="container flex justify-between bg-transparent  mx-auto py-2 ">
      <Link to="/">
        <div className="text-red-600 text-4xl font-bold">NETFLIX</div>
      </Link>
      <div className="flex items-center">
        <Link to="/login">
          <button className=" border-red-600 mr-4 px-4 py-2 rounded bg-transparent text-red-600 text-xl font-bold">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="text-white px-4 py-2 text-xl font-bold mr-4 rounded bg-red-600">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
