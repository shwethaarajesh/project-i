"use client";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Search from "../Search/Search";
export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const profileOptions = [
    "My Profile",
    "My Events",
    "Liked Events",
    "Settings",
  ];
  const menuOptions = [
    { name: "Create New Event", link: "/CreateListing" },
    { name: "View All Events", link: "/ViewListing" },
    { name: "View My Events", link: "/Home" },
  ];

  const onClickMenu = () => {
    setShowDropdownMenu((prevVal) => !prevVal);
  };
  const onClickLink = (linkVal: string) => {
    router.push(linkVal);
  };
  return (
    <div>
      <div className="grid bg-primary-light p-4  gap-5 font-sans grid-cols-12 font-light items-center ">
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
            readOnly
            value={""}
            onClick={() => {
              console.log("Clicked input");
              setOnSearch(true);
            }}
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
        <div className="block sm:hidden cursor-pointer" onClick={onClickMenu}>
          <IoIosMenu className="text-gray-600" />
        </div>
        <button
          className="flex"
          onClick={() => {
            setShowProfileOptions((prevValue) => !prevValue);
          }}
        >
          <CgProfile className=" min-w-[10px] text-gray-600" />
          <IoMdArrowDropdown className=" min-w-[10px] text-primary-text " />
        </button>
      </div>
      {showProfileOptions && (
        <div className="min-h-[60px] z-30 py-3 px-6 gap-3 flex flex-col min-w-[100px] lg:min-w-[250px] right-0 mr-2 absolute bg-white shadow-xl ">
          {profileOptions.map((eachOption, index) => {
            return (
              <div
                className={`font-light text-sm border-0 hover:shadow-2xl  cursor-pointer ${
                  index < profileOptions.length - 1 && " pb-2 border-b"
                } border-gray-300`}
                key={index}
              >
                {eachOption}
              </div>
            );
          })}
        </div>
      )}
      {showDropdownMenu && (
        <div className="h-full z-20 py-3 px-6 flex flex-col w-full  absolute bg-white shadow-xl ">
          <div
            className=" w-full cursor-pointer flex items-center justify-end"
            onClick={onClickMenu}
          >
            <IoIosClose size={24} />
          </div>
          {menuOptions.map((eachOption, index) => {
            return (
              <div
                className={`font-light  py-6 flex justify-between text-sm border-0 hover:bg-secondary-extralight  cursor-pointer ${
                  index < profileOptions.length - 1 && " pb-2 border-b"
                } border-gray-300`}
                key={index}
                onClick={() => {
                  onClickLink(eachOption.link);
                }}
              >
                <div>{eachOption.name}</div>
                <div className="">
                  <BsChevronRight />
                </div>
              </div>
            );
          })}
        </div>
      )}
      {onSearch && (
        <Search onSearch={onSearch} setOnSearch={setOnSearch}></Search>
      )}
    </div>
  );
}
