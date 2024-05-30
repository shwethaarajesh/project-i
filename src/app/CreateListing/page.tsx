"use client";
import Button from "../components/Button/Button";
import FormComponent from "../components/FormComponent/FormComponent";
import Header from "../components/Header/Header";
import { ChangeEvent, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import FormDropdown from "../components/FormDropdown/FormDropdown";

export default function CreateListing() {
  const [eventName, setEventName] = useState("");
  const [genre, setGenre] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isAgeLimitBroken, setIsAgeLimitBroken] = useState(false);
  const [noOfPeople, setNoOfPeople] = useState("");
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState("");
  const [enrollBy, setEntrollBy] = useState("");
  const [description, setDescription] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [gender, setGender] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState([""]);

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
    if (/^\d*$/.test(event.target.value)) {
      setIsAgeLimitBroken(false);
      setAgeLimit(event.target.value);
    }
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
    const copy = structuredClone(socialMediaLinks);
    copy.push("");
    setSocialMediaLinks(copy);
  };

  const onClickRemoveSocialLink = (index: number) => {
    const updatedLinks = [
      ...socialMediaLinks.slice(0, index),
      ...socialMediaLinks.slice(index + 1),
    ];
    setSocialMediaLinks(updatedLinks);
  };

  const onSubmit = () => {
    const age = parseInt(ageLimit);
    if (age < 16 || age > 70) {
      setIsAgeLimitBroken(true);
    }
    const eventJson = {
      eventName: eventName,
      eventGenre: genre,
      noOfPeople: noOfPeople,
      location: location,
      eventType: eventType,
      enrollBy: enrollBy,
      description: description,
      ageLimit: ageLimit,
      preferredGender: gender,
      socialMediaLinks: socialMediaLinks,
    };
    console.log("Submitted", eventJson);
  };

  const eventTypes = ["Outdoors", "Indoors", "Online"];
  const commonGenres = ["Movie", "Picnic", "Shopping", "Concert"];
  const preferredGenders = ["Male", "Female", "Transgender", "Any"];
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
            <FormDropdown
              header={"Event type"}
              stateName={eventType}
              onChangeEvent={onChangenEventType}
              options={eventTypes}
              selectedOption={eventType}
              onFocus={() => setIsFocused(false)}
            ></FormDropdown>
            <FormComponent
              header={"Enroll by (Date)"}
              stateName={enrollBy}
              onChangeEventName={onChangeEnrollBy}
              useCalendar={true}
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
            <div>
              <FormComponent
                header={"Age limit (Between 16-70)"}
                stateName={ageLimit}
                onChangeEventName={onChangeAge}
                onFocus={() => setIsFocused(false)}
              ></FormComponent>
              {isAgeLimitBroken && (
                <div className=" mt-2 font-sans font-light text-xs text-red-500">
                  Age can be between 16 - 70 only{" "}
                </div>
              )}
            </div>
            <FormDropdown
              header={"Preferred gender"}
              stateName={gender}
              onChangeEvent={onChangeGender}
              options={preferredGenders}
              selectedOption={gender}
              onFocus={() => setIsFocused(false)}
            ></FormDropdown>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-sans font-light text-xs">
              {"Social media links (Max:3)"}
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
                      }}
                    />
                  </div>
                  <div className="w-[5%] flex justify-center items-center">
                    {index == socialMediaLinks.length - 1 && index != 2 && (
                      <div
                        className=" cursor-pointer  "
                        onClick={onClickAddSocialLink}
                      >
                        <IoMdAdd size={16}></IoMdAdd>
                      </div>
                    )}
                    {(index > 0 ||
                      (index == 0 && socialMediaLinks.length > 1)) && (
                      <div
                        className=" cursor-pointer  "
                        onClick={() => {
                          onClickRemoveSocialLink(index);
                        }}
                      >
                        <FiMinus size={16}></FiMinus>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* {isNoOfLinksMore && (
              <div className=" mt-3 font-sans font-light text-xs text-red-400">
                {"Cannot have more than 3 links"}
              </div>
            )} */}
          </div>

          <Button
            onClick={() => {
              console.log("hi");
              onSubmit();
            }}
            containerClassName="w-full flex justify-center items-center"
            className="mt-6 flex justify-center items-center  bg-secondary-light px-5 py-2 font-sans rounded-lg font-light text-sm border shadow-md hover:shadow-xl"
            text={"Create Event Now !"}
          ></Button>
        </div>
      </div>
    </div>
  );
}
