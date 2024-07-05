"use client";

import { useSearchParams } from "next/navigation";
import EventImageBanner from "../components/EventImageBanner/EventImageBanner";
import EventListingCard from "../components/EventListingCard/EventListingCard";
import Header from "../components/Header/Header";
import { Oval, TailSpin } from "react-loader-spinner";
import { useEffect, useState } from "react";

export default function SearchListing() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  interface IEvent {
    imageUrl: string;
    location: string;
    noOfPeople: number;
    eventDate: string;
    eventTime: string;
    title: string;
    genre: string;
    description: string;
  }

  const [searchParameters] = useState([
    "title",
    "genre",
    "description",
    "eventDate",
  ]);
  const events: IEvent[] = [
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
  const [searchedEvents, setSearchedEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const filteredArray = events.filter((eachEvent) => {
      return searchParameters.some((newParam) => {
        const searchStr = search.toLowerCase();
        const currEvent = eachEvent[newParam as keyof IEvent]
          .toString()
          .toLowerCase();

        console.log(
          search,
          newParam,
          eachEvent,
          currEvent.includes(searchStr),
          searchStr.includes(currEvent)
        );
        return currEvent.includes(searchStr) || searchStr.includes(currEvent);
      });
    });
    console.log(filteredArray);
    setSearchedEvents(filteredArray.slice());

    setIsLoading(false);
  }, [search]);

  return (
    <div className="">
      <Header></Header>
      <div className="m-6 pb-8 px-2 sm:p-8 flex flex-col gap-8">
        <div className="font-light text-lg text-primary-text">
          {'Events matching: "' + search + '"'}
        </div>
        {isLoading && (
          <div className="w-full flex justify-center items-center">
            <TailSpin color="#FDD1D2"></TailSpin>
          </div>
        )}
        {!isLoading && searchedEvents.length > 0 && (
          <div className="grid grid-cols-1 gap-x-4 gap-y-6  lg:grid-cols-2 ">
            {searchedEvents.map((eachEvent, i) => {
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
        )}
        {!isLoading && searchedEvents.length == 0 && (
          <div className="w-full text-2xl font-extralight flex justify-center items-center mt-10 ">
            {" "}
            No events found{" "}
          </div>
        )}
      </div>
    </div>
  );
}
