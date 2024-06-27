"use client";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

import { useRouter, usePathname } from "next/navigation";
export default function Header() {
  const router = useRouter();

  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="grid  gap-4 font-sans grid-cols-12 font-light items-center ">
      <button
        onClick={() => {
          router.push("/Home");
        }}
      >
        <GoHome size={20} />
      </button>
      <div className=" flex gap-4 col-span-10 justify-center text-sm">
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
          Create Event
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
