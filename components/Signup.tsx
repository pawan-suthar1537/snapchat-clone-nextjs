import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 font-sans">
      <form className="w-80 bg-white rounded-lg shadow-md p-8">
        <h2 className="mb-6 text-2xl font-bold">Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full h-12 mb-6 px-4 rounded-full border-2 border-gray-300 focus:border-blue-500 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full h-12 mb-6 px-4 rounded-full border-2 border-gray-300 focus:border-blue-500 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full h-12 mb-6 px-4 rounded-full border-2 border-gray-300 focus:border-blue-500 outline-none"
        />
        <button
          type="submit"
          className="w-full h-12 bg-blue-500 text-white rounded-full transition-colors duration-300 hover:bg-blue-600"
        >
          Sign Up
        </button>
        <div className="flex justify-center mt-4 ">
          <Button className="rounded-full h-12 w-full gap-3">
            Signup With Github <SiGithub />
          </Button>
        </div>
        <p className="mt-4 ">
          Already Have an Account?{" "}
          <Link href={"/login"}>
            <span className="underline-offset-1 text-blue-500">Login</span>
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
