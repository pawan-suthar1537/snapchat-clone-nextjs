import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#FFFC00] font-sans">
      <div className="w-80 bg-white rounded-lg shadow-md p-8">
        <h2 className="mb-6 text-2xl font-bold">Login </h2>
        
        
        <div className="flex justify-center mt-4 ">
          <Button className="rounded-full h-12 w-full gap-3">
            Login With Github <SiGithub />
          </Button>
        </div>
        <p className="mt-4 ">
          Dont  Have an Account?{" "}
          <Link href={"/signup"}>
            <span className="underline-offset-1 text-blue-500">Signup</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  )
}

export default Login