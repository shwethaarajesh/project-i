"use client";
import FormComponent from "../components/FormComponent/FormComponent";
import Header from "../components/Header/Header";
import { ChangeEvent, useState } from "react";

export default function CreateListing() {
  const [eventName, setEventName] = useState("");
  const [genre, setGenre] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const onChangeEventName = (event: ChangeEvent<HTMLInputElement>) => {
    setEventName(event.target.value);
  };

  const onChangeGenre = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
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
                      className={`w-auto px-5 py-[10px] rounded-2xl font-sans font-light text-xs italic ${
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
        </div>
      </div>
    </div>
  );
}
