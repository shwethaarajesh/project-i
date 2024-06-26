"use client";

import EventImageBanner from "../components/EventImageBanner/EventImageBanner";
import Header from "../components/Header/Header";

export default function ViewListing() {
  return (
    <div className="">
      <div className="bg-primary-light p-4">
        <Header></Header>
      </div>
      <div className="m-6 p-8 ">
        <EventImageBanner
          imageUrl={""}
          location={"India, Coimbatore"}
          noOfPeople={3}
        ></EventImageBanner>
      </div>
    </div>
  );
}
