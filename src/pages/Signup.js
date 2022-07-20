import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../contest/AuthContext";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[450px] h-[500px] bg-black/80 p-4 rounded-lg">
          <h2 className="text-3xl text-center text-white mb-8">Sign Up</h2>
          <div className="max-w-[400px] mx-auto">
            <form onSubmit={submitHandler} className="flex flex-col">
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="p-3 bg-black/30 my-4  text-white"
                placeholder="Enter your email"
              />
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="p-3 bg-black/30 my-4 text-white"
                placeholder="Enter your password"
              />
              <button
                type="submit"
                className="bg-red-600 mb-4 text-white font-bold p-3"
              >
                Join
              </button>
              <div className="text-white">
                Already a member?
                <Link to="/login">
                  <span className="ml-4 text-red-600">Login</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
