import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

export default function FormComponent(inputValues: {
  header: string;
  stateName: string;
  onChangeEventName: any;
  onFocus?: any;
  onBlur?: any;
  useInput?: true;
  useTextArea?: boolean;
  useCalendar?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-sans font-light text-xs">{inputValues.header}</div>
      {!inputValues.useTextArea && !inputValues.useCalendar && (
        <input
          className="bg-secondary-extralight p-2 drop-shadow-md font-sans font-light text-md"
          type="text"
          value={inputValues.stateName}
          onFocus={inputValues.onFocus}
          onBlur={inputValues.onBlur}
          onChange={inputValues.onChangeEventName}
        />
      )}
      {inputValues.useCalendar && (
        <input
          type="date"
          onFocus={inputValues.onFocus}
          onBlur={inputValues.onBlur}
          onChange={inputValues.onChangeEventName}
          className="bg-secondary-extralight px-2 py-3 drop-shadow-md font-sans font-light text-xs"
        ></input>
      )}
      {inputValues.useTextArea && (
        <textarea
          className="bg-secondary-extralight min-h-28 p-2 drop-shadow-md font-sans font-light text-md"
          value={inputValues.stateName}
          onFocus={inputValues.onFocus}
          onBlur={inputValues.onBlur}
          onChange={inputValues.onChangeEventName}
        ></textarea>
      )}
    </div>
  );
}
