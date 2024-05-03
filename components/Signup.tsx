import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#FFFC00]  font-sans">
      <form className="w-80 bg-white rounded-lg shadow-md p-8">
        <h2 className="mb-6 text-2xl font-bold">Sign to Snapchat</h2>
        
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
