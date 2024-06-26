"use client";
interface IEventListingCard {
  imageUrl: string;
  location: string;
  noOfPeople: number;
  eventDate: string;
  eventTime: string;
  title: string;
  genre: string;
  description: string;
}
export default function EventListingCard(props: IEventListingCard) {
  return <div> Event Listing Card</div>;
}
