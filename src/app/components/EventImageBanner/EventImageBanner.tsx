"use client";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
interface IEventImageBanner {
  imageUrl: string;
  location: string;
  noOfPeople: number;
}
export default function EventImageBanner(props: IEventImageBanner) {
  const prefix = process.env.NODE_ENV == "production" ? "" : "";

  return (
    <div className=" relative">
      {" "}
      <Image
        className=" object-cover w-full min-h-[200px]"
        src={props.imageUrl || prefix + "/placeholder1.png"}
        width={0}
        height={0}
        sizes="100vw"
        alt="Picture of the author"
      />
      <div className="h-[25%] items-center bg-secondary-light absolute bottom-0 left-0 w-full opacity-50 "></div>
      <div className="h-[25%] px-4 flex justify-between items-center bg-transparent absolute bottom-0 left-0 w-full opacity-100 ">
        <div className="flex justify-center gap-2 items-center opacity-100">
          <MdLocationPin size={14} className="text-black" />
          <div className=" font-light text-xs ">{props.location}</div>
        </div>
        <div className="bg-tertiary-light px-2 py-1 xs:px-3 xs:py-2 gap-1 flex justify-center items-center rounded-full   ">
          <MdOutlinePersonOutline size={16} className="text-sm" />
          <div className="hidden xs:block text-xs  text-white">
            {props.noOfPeople + " people"}
          </div>
          <div className="block xs:hidden text-xs  text-white">
            {props.noOfPeople}
          </div>
        </div>
      </div>
    </div>
  );
}
