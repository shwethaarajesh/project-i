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
          ></FormComponent>
          <FormComponent
            header={"Genre of event"}
            stateName={genre}
            onChangeEventName={onChangeGenre}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          ></FormComponent>
          {isFocused && <div>Genre popup</div>}
        </div>
      </div>
    </div>
  );
}
