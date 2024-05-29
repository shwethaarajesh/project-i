"use client";
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
    const copyOfLinks: string[] = [];
    socialMediaLinks.forEach((link, i) => {
      if (index == i) {
        copyOfLinks.push(link);
      } else {
        copyOfLinks.push(event.target.value);
      }
    });

    setSocialMediaLinks(copyOfLinks);
  };

  useEffect(() => {}, [socialMediaLinks]);

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
                <div className="flex gap-3 " key={eachLink + index.toString()}>
                  <div className="w-[90%]">
                    <input
                      className="w-full bg-secondary-extralight p-2 drop-shadow-md font-sans font-light text-md"
                      type="text"
                      value={socialMediaLinks[index]}
                      onFocus={() => setIsFocused(false)}
                      onChange={(e: any) => {
                        onChangeSocialLinks(e, index);
                      }}
                    />
                  </div>
                  {index == socialMediaLinks.length - 1 && (
                    <div
                      className="w-[10%] mt-6 cursor-pointer flex justify-center items-center text-center text-[8px]"
                      onClick={() => {
                        const copy = structuredClone(socialMediaLinks);
                        copy.push("");
                        setSocialMediaLinks(copy);
                        console.log("Pushed", socialMediaLinks.length);
                      }}
                    >
                      {" "}
                      Plus{" "}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* <FormComponent
            header={"Social media links"}
            stateName={gender}
            onChangeEventName={onChangeGender}
            onFocus={() => setIsFocused(false)}
          ></FormComponent> */}
        </div>
      </div>
    </div>
  );
}
