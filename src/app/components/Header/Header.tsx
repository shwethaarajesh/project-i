"use client";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <div className="grid  gap-4 font-sans grid-cols-12 font-light items-center ">
      <button
        onClick={() => {
          router.push("/Home");
        }}
      >
        <GoHome size={20} />
      </button>
      <div
        className=" flex gap-4 col-span-10 justify-center text-sm"
        onClick={() => {
          router.push("/CreateListing");
        }}
      >
        <div className="p-3 hover:cursor-pointer border-b-2 border-transparent hover:border-secondary-light">
          Create Event
        </div>
        <div className="p-3 hover:cursor-pointer border-b-2 border-transparent hover:border-secondary-light">
          View Events
        </div>
      </div>
      <button className="flex">
        <CgProfile />
        <IoMdArrowDropdown />
      </button>
    </div>
  );
}
