import React, { useEffect } from "react";
import "./Signup.css";

const Signup = () => {

  return (
    <>
      <div
        style={{ backgroundColor: "#121212" }}
        className="SignupContainer flex justify-center items-center h-screen"
      >
        <div
          style={{ backgroundColor: "#1E1E1E" }}
          className="shadow-lg flex flex-col w-96 p-4 rounded-lg mx-10 text-white px-5 py-10"
        >
          <h1 className="text-3xl mb-5 font-semibold text-center">Sign Up</h1>

          <label htmlFor="">Username</label>
          <input
            style={{ backgroundColor: "#2A2A2A" }}
            type="text"
            className="text-md rounded-md px-2 py-1 mb-3 focus:border-pink-600 focus:outline-none focus:border-2 focus:true"
          />

          <label htmlFor="">Email</label>
          <input
            style={{ backgroundColor: "#2A2A2A" }}
            type="text"
            className="text-md rounded-md px-2 py-1 mb-3 focus:border-pink-600 focus:outline-none focus:border-2"
          />

          <label htmlFor="">Password</label>
          <input
            style={{ backgroundColor: "#2A2A2A" }}
            type="text"
            className="text-md rounded-md px-2 py-1 mb-8 focus:border-pink-600 focus:outline-none focus:border-2"
          />

          <button
            type="submit"
            className="bg-pink-600 rounded-md py-1 cursor-pointer transition hover:bg-pink-500 duration-500"
          >
            Submit
          </button>
          <label htmlFor="" className="text-center">
            Already have an account?{" "}
            <a href="" className="text-pink-600 hover:underline">
              Login
            </a>
          </label>
        </div>
      </div>
    </>
  );
};

export default Signup;
