import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./contest/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
