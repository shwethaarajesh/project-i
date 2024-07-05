"use client";

import { ChangeEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GoCodescanCheckmark } from "react-icons/go";

export default function Search(props: {
  onSearch: boolean;
  setOnSearch: Function;
}) {
  const [searchText, setSearchText] = useState("");
  const onChangeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="absolute h-full top-0 w-full z-10 bg-white ">
      <div className="bg-primary-light p-4 min-h-[64px] sm:min-h-[78px] px-4 flex items-center justify-center">
        <div className="bg-white w-full px-4 py-[6px] justify-center items-center grid grid-cols-12 rounded-full">
          <IoIosArrowRoundBack
            size={20}
            onClick={() => {
              props.setOnSearch(false);
            }}
            className="col-span-1 cursor-pointer "
          />
          <input
            type="text"
            value={searchText}
            onChange={onChangeSearchText}
            onClick={() => {
              console.log("Clicked input");
            }}
            autoFocus
            className={` w-full ${"col-span-10"} ring-0 ring-transparent outline-none caret-primary-text text-sm  `}
            placeholder="Search for events"
          ></input>
          <div className="flex gap-2 items-center justify-end">
            {searchText && (
              <IoIosClose
                className="text-primary-text cursor-pointer"
                onClick={() => {
                  setSearchText("");
                }}
                size={24}
              ></IoIosClose>
            )}
            <GoCodescanCheckmark className="text-primary-text " />
          </div>
        </div>
      </div>
    </div>
  );
}
