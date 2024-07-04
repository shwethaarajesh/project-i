"use client";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

import { useRouter, usePathname } from "next/navigation";
export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="grid  gap-5 font-sans grid-cols-12 font-light items-center ">
      <button
        className=" col-span-2"
        onClick={() => {
          router.push("/Home");
        }}
      >
        <div className="  sm:min-w-[38px] cursor-pointer italic font-light text-sm sm:font-normal ">
          Proj I
        </div>
      </button>
      <div className="bg-white px-4 py-1 justify-center items-center grid grid-cols-12 gap-4 col-span-8 sm:col-span-6 lg:col-span-5 rounded-full">
        <IoIosSearch className="col-span-2" />
        <input
          type="text"
          value={""}
          className=" w-full col-span-10 ring-0 ring-transparent outline-none caret-transparent"
          placeholder="Search for events"
        ></input>
      </div>
      <div className="hidden sm:flex gap-4 col-span-3 lg:col-span-4 justify-evenly text-sm">
        <div
          className={`p-3 hover:cursor-pointer border-b-2 ${
            pathname == "/CreateListing"
              ? "border-secondary-light"
              : "border-transparent"
          }  hover:border-secondary-light`}
          onClick={() => {
            router.push("/CreateListing");
          }}
        >
          <div className="block lg:hidden">Create</div>
          <div className="hidden lg:block">Create Event</div>
        </div>
        <div
          className={`p-3 hover:cursor-pointer border-b-2 ${
            pathname == "/ViewListing"
              ? "border-secondary-light"
              : "border-transparent"
          }  hover:border-secondary-light`}
          onClick={() => {
            router.push("/ViewListing");
          }}
        >
          <div className="block lg:hidden">View</div>
          <div className="hidden lg:block">View Events</div>
        </div>
      </div>
      <div className="block sm:hidden">
        <IoIosMenu className="text-gray-600" />
      </div>
      <button className="flex">
        <CgProfile className=" min-w-[10px] text-gray-600" />
        <IoMdArrowDropdown className=" min-w-[10px] text-primary-text " />
      </button>
    </div>
  );
}
