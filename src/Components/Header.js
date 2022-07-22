import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../contest/AuthContext";
// import {} from ''
function Header() {
  const { logOut, user } = UserAuth();
  return (
    <div className="container flex justify-between bg-transparent   mx-auto py-2 ">
      <Link to="/">
        <div className="text-red-600 text-xl md:text-4xl font-bold">
          NETFLIX
        </div>
      </Link>
      <div className="flex items-center">
        {user ? (
          <>
            <Link to="/account">
              <button className=" border-red-600 mr-4 px-4 py-2 rounded bg-transparent text-red-600 text-xl font-bold">
                Account
              </button>
            </Link>
            <Link to="/signup">
              <button
                onClick={() => logOut()}
                className="text-white px-4 py-2 text-xl font-bold mr-4 rounded bg-red-600"
              >
                Logout
              </button>
            </Link>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
