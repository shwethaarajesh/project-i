"use client";

import EventImageBanner from "../components/EventImageBanner/EventImageBanner";
import EventListingCard from "../components/EventListingCard/EventListingCard";
import Header from "../components/Header/Header";

export default function ViewListing() {
  const events = [
    {
      imageUrl: "",
      location: "India, Coimbatore",
      noOfPeople: 3,
      eventDate: "31st May 2024",
      eventTime: "8AM to 12PM",
      title: "Haikyuu Battle at the Dumpster",
      genre: "Movie",
      description:
        "This is a very very long description of the event This is a very very long description of the event This is a very very long description of the eventThis is a very very long description of the eventThis is a very very long description of the event",
    },
    {
      imageUrl: "",
      location: "India, Bangalore",
      noOfPeople: 8,
      eventDate: "2nd July 2024",
      eventTime: "3PM to 5PM",
      title: "Cottagecore Picnic at Cubbon Park",
      genre: "Picnic",
      description:
        "This is a very very long description of the event This is a very very long description of the event This is a very very long description of the eventThis is a very very long description of the eventThis is a very very long description of the event",
    },
    {
      imageUrl: "",
      location: "USA, Los Angeles",
      noOfPeople: 2,
      eventDate: "7th Aug 2024",
      eventTime: "6PM to 8PM",
      title: "Need help shopping for dresses at XYZ",
      genre: "Shopping",
      description:
        "This is a very very long description of the event This is a very very long description of the event This is a very very long description of the eventThis is a very very long description of the eventThis is a very very long description of the event",
    },
  ];
  return (
    <div className="">
      <div className="bg-primary-light p-4">
        <Header></Header>
      </div>
      <div className="m-6 p-8 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6  lg:grid-cols-2 ">
          {events.map((eachEvent, i) => {
            return (
              <div key={i}>
                <EventListingCard
                  imageUrl={eachEvent.imageUrl}
                  location={eachEvent.location}
                  noOfPeople={eachEvent.noOfPeople}
                  eventDate={eachEvent.eventDate}
                  eventTime={eachEvent.eventTime}
                  title={eachEvent.title}
                  genre={eachEvent.genre}
                  description={eachEvent.description}
                ></EventListingCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
