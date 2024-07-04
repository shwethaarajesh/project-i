"use client";

import { BsHeart, BsHeartFill, BsShare } from "react-icons/bs";
import EventImageBanner from "../components/EventImageBanner/EventImageBanner";
import Header from "../components/Header/Header";
import { useState } from "react";
import Button from "../components/Button/Button";

export default function EventListingPage() {
  const [isLiked, setIsLiked] = useState(false);
  const onClickLike = () => {
    setIsLiked(!isLiked);
  };
  const eventDetails = {
    imageUrl: "",
    location: "India, Bangalore",
    noOfPeople: 8,
    eventDate: "2nd July 2024",
    eventTime: "3PM to 5PM",
    title: "Cottagecore Picnic at Cubbon Park",
    genre: "Picnic",
    slotsBooked: 3,
    enrollBy: "30th June 2024",
    enrollCount: 2,
    eventType: "Outdoors",
    ageLimit: 30,
    preferredGender: "Any",
    socialMediaLinks: [
      "https://react-icons.github.io/react-icons/search/#q=bschevronri",
      "https://react-icons.github.io/react-icons/search/#q=bschevronri",
    ],
    description:
      "This is a very very long description of the event This is a very very long description of the event This is a very very long description of the eventThis is a very very long description of the eventThis is a very very long description of the event",
  };
  const userDetails = {
    userName: "Jane Doe",
    userAge: 23,
    userLocation: "India, Coimbatore",
    userGender: "Female",
    userSocialMedia: ["abc.com"],
    contact: {
      mail: "abc@gmail.com",
      phoneNumber: "1234567890",
    },
  };
  return (
    <div>
      <Header></Header>
      <div className=" p-3 m-1 xs:p-4 xs:m-3 sm:m-6 sm:p-8">
        <div className="bg-primary-light p-3">
          <EventImageBanner
            imageUrl={eventDetails.imageUrl}
            location={eventDetails.location}
            noOfPeople={eventDetails.noOfPeople}
          ></EventImageBanner>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-y-4 xs:grid-cols-3 items-center justify-items-center text-primary-text">
          <div className="font-light text-xs w-full text-center  border-r  border-r-black ">
            {eventDetails.eventDate}
          </div>
          <div className="font-light text-xs  w-full text-center k xs:border-r  xs:border-r-black">
            {eventDetails.eventTime}
          </div>
          <div className="hidden col-span-1 xs:flex gap-5 items-center justify-center w-full">
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

        <div className="flex gap-5 lg:gap-6 items-center mt-8">
          <div className=" text-lg lg:text-2xl xl:text-3xl font-normal  text-primary-text ">
            {eventDetails.title}
          </div>
          <div className="text-xs lg:-text-sm xl:text-base font-light bg-secondary-light py-1 px-4 rounded-full">
            {eventDetails.genre}
          </div>
        </div>
        <div className="flex flex-col xs:flex-row justify-between mt-4 text-xs  lg:text-sm font-light">
          <div className="flex gap-2">
            <div>{"Maximum number of people : "}</div>
            <div>{eventDetails.noOfPeople}</div>
          </div>
          <div className="flex gap-2">
            <div>{"Number of openings left : "}</div>
            <div>{eventDetails.noOfPeople - eventDetails.enrollCount}</div>
          </div>
        </div>
        <div className="hidden sm:flex flex-col  mt-6 lg:mt-12 xs:flex-row justify-between  text-xs  lg:text-sm font-light">
          <div className="flex gap-2">
            <div>{"Enroll by : "}</div>
            <div className="text-secondary-text">{eventDetails.enrollBy}</div>
          </div>
          <div className="flex gap-2">
            <div>{"Age limit : "}</div>
            <div className="text-secondary-text">{eventDetails.ageLimit}</div>
          </div>
          <div className="flex gap-2">
            <div>{"Event type : "}</div>
            <div className="text-secondary-text">{eventDetails.eventType}</div>
          </div>
          <div className="flex gap-2">
            <div>{"Preferred gender : "}</div>
            <div className="text-secondary-text">
              {eventDetails.preferredGender}
            </div>
          </div>
        </div>

        <div className="flex sm:hidden flex-col justify-between mt-6 lg:mt-12 text-xs  lg:text-sm font-light">
          <div className="flex justify-between w-full">
            <div className="flex gap-2">
              <div>{"Enroll by : "}</div>
              <div className="text-secondary-text">{eventDetails.enrollBy}</div>
            </div>
            <div className="flex gap-2 ">
              <div>{"Age limit : "}</div>
              <div className="text-secondary-text">{eventDetails.ageLimit}</div>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex gap-2">
              <div>{"Event type : "}</div>
              <div className="text-secondary-text">
                {eventDetails.eventType}
              </div>
            </div>
            <div className="flex gap-2">
              <div>{"Preffered gender : "}</div>
              <div className="text-secondary-text">
                {eventDetails.preferredGender}
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-8 lg:mt-12 gap-4 text-xs lg:text-sm font-light">
          <div>{"Social media links : "}</div>
          <div className=" flex flex-col gap-1">
            {eventDetails.socialMediaLinks.map((eachLink, index) => {
              return (
                <a
                  href={eachLink}
                  target="_"
                  className="text-primary-text underline hover:text-secondary-text "
                  key={index}
                >
                  {eachLink}
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-8 lg:mt-12 flex flex-col gap-4 text-xs  lg:text-sm font-light">
          <div>{"Description : "}</div>
          <div className="w-full  text-secondary-text border-[0.5px] border-solid border-primary-text p-6">
            {eventDetails.description}
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="w-full">
            <div className=" text-base lg:text-xl xl:text-2xl font-normal  text-primary-text ">
              {"Host details"}
            </div>
            <div className="flex mt-3 flex-col gap-2 text-xs  lg:text-sm font-light">
              <div className="flex gap-2">
                <div>{"Host name : "}</div>
                <div className="text-secondary-text">
                  {userDetails.userName}
                </div>
              </div>
              <div className="flex gap-2">
                <div>{"Host age : "}</div>
                <div className="text-secondary-text">{userDetails.userAge}</div>
              </div>
              <div className="flex gap-2">
                <div>{"Host location : "}</div>
                <div className="text-secondary-text">
                  {userDetails.userLocation}
                </div>
              </div>
              <div className="flex gap-2">
                <div>{"Host gender : "}</div>
                <div className="text-secondary-text">
                  {userDetails.userGender}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" text-base lg:text-xl xl:text-2xl font-normal  text-primary-text ">
              {"Contact the host"}
            </div>
            <div className="flex mt-3 flex-col gap-2 text-xs  lg:text-sm font-light">
              <div className="flex gap-2">
                <div>{"Host email : "}</div>
                <a
                  href={"mailto:" + userDetails.contact.mail}
                  className="text-secondary-text hover:underline"
                >
                  {userDetails.contact.mail}
                </a>
              </div>
              <div className="flex gap-2">
                <div>{"Social media link : "}</div>
                <a
                  href="userDetails.userSocialMedia"
                  target="_"
                  className="text-secondary-text hover:underline"
                >
                  {userDetails.userSocialMedia}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40px] ">
          <Button
            containerClassName="flex justify-center items-center"
            className="w-[60%] bg-secondary-light px-5 py-2 font-sans rounded-lg font-light text-sm border shadow-md hover:shadow-xl"
            text={"Enroll Now"}
          ></Button>
        </div>
      </div>
    </div>
  );
}
