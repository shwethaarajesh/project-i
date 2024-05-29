import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

export default function FormComponent(inputValues: {
  header: string;
  stateName: string;
  onChangeEventName: any;
  onFocus?: any;
  onBlur?: any;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-sans font-light text-xs">{inputValues.header}</div>
      <input
        className="bg-secondary-extralight p-2 drop-shadow-md font-sans font-light text-md"
        type="text"
        value={inputValues.stateName}
        onFocus={inputValues.onFocus}
        onBlur={inputValues.onBlur}
        onChange={inputValues.onChangeEventName}
      />
    </div>
  );
}
