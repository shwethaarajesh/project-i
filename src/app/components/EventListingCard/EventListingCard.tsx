"use client";

import { useState } from "react";
import EventImageBanner from "../EventImageBanner/EventImageBanner";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface IEventListingCard {
  imageUrl: string;
  location: string;
  noOfPeople: number;
  eventDate: string;
  eventTime: string;
  title: string;
  genre: string;
  description: string;
}
export default function EventListingCard(props: IEventListingCard) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const onClickLike = () => {
    setIsLiked(!isLiked);
  };
  const onClickRedirect = () => {
    router.push("/EventListing");
  };
  return (
    <div className="shadow-lg p-3 cursor-pointer" onClick={onClickRedirect}>
      <EventImageBanner
        imageUrl={props.imageUrl}
        location={props.location}
        noOfPeople={props.noOfPeople}
      ></EventImageBanner>
      <div className="mt-2 grid grid-cols-3 items-center justify-items-center text-primary-text">
        <div className="font-light text-xs w-full text-center border-r  border-r-black">
          {props.eventDate}
        </div>
        <div className="font-light text-xs  w-full text-center  border-r  border-r-black">
          {props.eventTime}
        </div>
        <div className="flex gap-5 items-center justify-center w-full">
          <BsShare className="cursor-pointer" />
          {isLiked ? (
            <BsHeartFill
              className="cursor-pointer text-secondary-light "
              onClick={onClickLike}
            />
          ) : (
            <BsHeart className="cursor-pointer" onClick={onClickLike} />
          )}
        </div>
      </div>
      <div className="flex gap-5 items-center mt-4">
        <div className=" text-lg text-primary-text font-normal">
          {props.title}
        </div>
        <div className="text-xs font-light bg-secondary-light py-1 px-4 rounded-full">
          {props.genre}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-5 items-center">
        <div className=" w-full text-sm font-light line-clamp-2 overflow-hidden text-ellipsis col-span-9">
          {props.description}
        </div>
        <div
          className="col-span-3 items-center justify-center flex gap-2 text-center text-xs text-tertiary-text
        "
        >
          <div>See more</div>
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
}
