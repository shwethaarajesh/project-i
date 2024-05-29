"use client";
import Button from "../components/Button/Button";
import FormComponent from "../components/FormComponent/FormComponent";
import Header from "../components/Header/Header";
import { ChangeEvent, useEffect, useState } from "react";

export default function CreateListing() {
  const [eventName, setEventName] = useState("");
  const [genre, setGenre] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [noOfPeople, setNoOfPeople] = useState("");
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState("");
  const [enrollBy, setEntrollBy] = useState("");
  const [description, setDescription] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [gender, setGender] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState([""]);
  const [isNoOfLinksMore, setIsNoOfLinksMore] = useState(false);

  const onChangeEventName = (event: ChangeEvent<HTMLInputElement>) => {
    setEventName(event.target.value);
  };

  const onChangeGenre = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  const onChangenNoOfPeople = (event: ChangeEvent<HTMLInputElement>) => {
    setNoOfPeople(event.target.value);
  };

  const onChangeLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const onChangenEventType = (event: ChangeEvent<HTMLInputElement>) => {
    setEventType(event.target.value);
  };

  const onChangeEnrollBy = (event: ChangeEvent<HTMLInputElement>) => {
    setEntrollBy(event.target.value);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeLimit(event.target.value);
  };

  const onChangeGender = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const onChangeSocialLinks = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedLinks = socialMediaLinks.map((link, i) =>
      i === index ? event.target.value : link
    );
    setSocialMediaLinks(updatedLinks);
  };

  const onClickAddSocialLink = () => {
    if (socialMediaLinks.length === 3) {
      setIsNoOfLinksMore(true);
      return;
    }
    const copy = structuredClone(socialMediaLinks);
    copy.push("");
    setSocialMediaLinks(copy);
  };

  const commonGenres = ["Movie", "Picnic", "Shopping", "Concert"];
  return (
    <div className="">
      <div className="bg-primary-light p-4">
        <Header></Header>
      </div>
      <div className="m-6 p-8 border-[3px] border-primary-light border-solid ">
        <div className="flex flex-col gap-6">
          <FormComponent
            header={"Event Name"}
            stateName={eventName}
            onChangeEventName={onChangeEventName}
            onFocus={() => setIsFocused(false)}
          ></FormComponent>
          <FormComponent
            header={"Genre of event"}
            stateName={genre}
            onChangeEventName={onChangeGenre}
            onFocus={() => setIsFocused(true)}
          ></FormComponent>
          {isFocused && (
            <div>
              <div className="font-sans font-light text-xs italic mb-3">
                People commonly choose
              </div>
              <div className="flex gap-4">
                {commonGenres.map((eachgenre) => {
                  return (
                    <div
                      key={eachgenre}
                      className={`w-auto cursor-pointer px-5 py-[10px] rounded-2xl font-sans font-light text-xs italic ${
                        eachgenre == genre
                          ? "bg-secondary-light"
                          : "bg-secondary-extralight shadow-sm"
                      }`}
                      onClick={() => setGenre(eachgenre)}
                    >
                      {eachgenre}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-5">
            <FormComponent
              header={"Number of people needed"}
              stateName={noOfPeople}
              onChangeEventName={onChangenNoOfPeople}
              onFocus={() => setIsFocused(false)}
            ></FormComponent>
            <FormComponent
              header={"Location"}
              stateName={location}
              onChangeEventName={onChangeLocation}
              onFocus={() => setIsFocused(false)}
            ></FormComponent>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <FormComponent
              header={"Event type"}
              stateName={eventType}
              onChangeEventName={onChangenEventType}
              onFocus={() => setIsFocused(false)}
            ></FormComponent>
            <FormComponent
              header={"Enroll by (Date)"}
              stateName={enrollBy}
              onChangeEventName={onChangeEnrollBy}
              onFocus={() => setIsFocused(false)}
            ></FormComponent>
          </div>

          <FormComponent
            header={"Description"}
            stateName={description}
            onChangeEventName={onChangeDescription}
            onFocus={() => setIsFocused(false)}
            useTextArea={true}
          ></FormComponent>

          <div className="grid grid-cols-2 gap-5">
            <FormComponent
              header={"Age limit"}
              stateName={ageLimit}
              onChangeEventName={onChangeAge}
              onFocus={() => setIsFocused(false)}
            ></FormComponent>
            <FormComponent
              header={"Preferred gender"}
              stateName={gender}
              onChangeEventName={onChangeGender}
              onFocus={() => setIsFocused(false)}
            ></FormComponent>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-sans font-light text-xs">
              {"Social media links"}
            </div>
            {socialMediaLinks.map((eachLink, index) => {
              return (
                <div className="flex gap-3 " key={index}>
                  <div className="w-[90%]">
                    <input
                      className="w-full bg-secondary-extralight p-2 drop-shadow-md font-sans font-light text-md"
                      type="text"
                      value={socialMediaLinks[index]}
                      onChange={(e: any) => {
                        onChangeSocialLinks(e, index);
                      }}
                      onFocus={() => {
                        setIsFocused(false);
                        setIsNoOfLinksMore(false);
                      }}
                    />
                  </div>
                  {index == socialMediaLinks.length - 1 && (
                    <div
                      className="w-[5%] mt-6 cursor-pointer flex justify-center items-center text-center text-[8px]"
                      onClick={onClickAddSocialLink}
                    >
                      {" "}
                      Plus{" "}
                    </div>
                  )}
                </div>
              );
            })}

            {isNoOfLinksMore && (
              <div className=" mt-3 font-sans font-light text-xs text-red-400">
                {"Cannot have more than 3 links"}
              </div>
            )}
          </div>

          <Button
            containerClassName="w-full flex justify-center items-center"
            className="mt-6 flex justify-center items-center  bg-secondary-light px-5 py-2 font-sans rounded-lg font-light text-sm border shadow-md hover:shadow-xl"
            text={"Create Event Now !"}
          ></Button>
        </div>
      </div>
    </div>
  );
}
