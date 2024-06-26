"use client";

import EventImageBanner from "../components/EventImageBanner/EventImageBanner";
import EventListingCard from "../components/EventListingCard/EventListingCard";
import Header from "../components/Header/Header";

export default function ViewListing() {
  return (
    <div className="">
      <div className="bg-primary-light p-4">
        <Header></Header>
      </div>
      <div className="m-6 p-8 flex flex-col gap-8">
        <EventListingCard
          imageUrl={""}
          location={"India, Coimbatore"}
          noOfPeople={3}
          eventDate={"31st May 2024"}
          eventTime={"8AM to 12PM"}
          title={"Sample Event 1"}
          genre={"Movie"}
          description={
            "This is a very very long description of the event This is a very very long description of the eventThis is a very very long description of the eventThis is a very very long description of the eventThis is a very very long description of the event"
          }
        ></EventListingCard>
        {/* <EventImageBanner
          imageUrl={""}
          location={"India, Coimbatore"}
          noOfPeople={3}
        ></EventImageBanner> */}
        {/* <EventImageBanner
          imageUrl={""}
          location={"India, Coimbatore"}
          noOfPeople={3}
        ></EventImageBanner> */}
      </div>
    </div>
  );
}
