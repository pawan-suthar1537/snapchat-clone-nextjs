import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { TbGridDots } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-screen px-10 py-4">
      <div className="flex items-center gap-5 rounded-full ">
        <Image src={logo} alt="logo" width={50} height={50} />
        <Input
          className="rounded-full border border-white"
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <Button variant={"link"}>Stories</Button>
        <Button variant={"link"}>Spotlight</Button>
        <Button variant={"link"}>Chat</Button>
        <Button variant={"link"}>Lense</Button>
      </div>
      <div className="flex items-center gap-5">
        <Button
          size={"icon"}
          variant={"secondary"}
          className="rounded-full bg-white text-black "
        >
          <TbGridDots size={25} />
        </Button>

        <Button className="rounded-full">Snapchat Ads</Button>
        <Button className="rounded-full">Download</Button>
        <Button size={"icon"} className="rounded-full">
          <IoMdLogOut />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
