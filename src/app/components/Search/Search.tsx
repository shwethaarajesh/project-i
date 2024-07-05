"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { GoCodescanCheckmark } from "react-icons/go";
import { useRouter } from "next/navigation";
export default function Search(props: {
  onSearch: boolean;
  setOnSearch: Function;
}) {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const onChangeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const removeHistory = (val: string) => {
    const index = searchHistory.indexOf(val);
    console.log(val, index);
    if (index > -1) {
      const newVal = searchHistory.slice();
      newVal.splice(index, 1);
      localStorage.setItem("searchHistory", newVal.join("//"));
      setSearchHistory(newVal);
    }
  };
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const onSearch = (strVal: string) => {
    const alNumStr = strVal.replace(/[^a-zA-Z0-9 ]/g, "");
    if (!alNumStr) {
      return;
    }
    const newUrl = "/SearchListing?search=" + alNumStr;

    const newHistory = searchHistory.slice();
    newHistory.push(alNumStr);
    setSearchHistory(newHistory);
    localStorage.setItem("searchHistory", newHistory.join("//"));
    router.push(newUrl);
    props.setOnSearch(false);
  };
  useEffect(() => {
    const history = localStorage.getItem("searchHistory")?.split("//");
    if (history) {
      setSearchHistory(history);
    }
  }, []);
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch(searchText);
              }
            }}
            onChange={onChangeSearchText}
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
            <GoCodescanCheckmark
              className="text-primary-text cursor-pointer "
              onClick={() => {
                onSearch(searchText);
              }}
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        {searchHistory.map((eachSearch, index) => {
          return (
            <div
              key={index}
              className="flex justify-between py-3 items-center cursor-pointer"
            >
              <div
                className="flex gap-4 items-center font-light"
                onClick={() => {
                  onSearch(eachSearch);
                }}
              >
                <MdHistory></MdHistory>
                <div className=" text-history-purple">{eachSearch}</div>
              </div>
              <IoIosClose
                className="font-light text-primary-text cursor-pointer"
                size={20}
                onClick={() => {
                  removeHistory(eachSearch);
                }}
              ></IoIosClose>
            </div>
          );
        })}
      </div>
    </div>
  );
}
