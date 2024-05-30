"use client";

import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

export default function FormDropdown(inputValues: {
  header: string;
  stateName: string;
  onChangeEvent: any;
  className?: string;
  selectedOption: string;
  options: string[];
  onFocus?: any;
  onBlur?: any;
}) {
  return (
    <div
      className={
        inputValues.className
          ? inputValues.className
          : "" + "flex flex-col gap-2"
      }
    >
      <div className="font-sans font-light text-xs">{inputValues.header}</div>
      <div>
        <div className="relative inline-block w-full">
          <select
            value={inputValues.selectedOption}
            onChange={inputValues.onChangeEvent}
            className="appearance-none w-full bg-secondary-extralight p-2 drop-shadow-md font-sans font-light text-md rounded-md pr-8"
          >
            <option value="" disabled>
              Select an option
            </option>
            {inputValues.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <MdArrowDropDown
            size={16}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
