"use client";

import { useRouter } from "next/navigation";
import FeaturedListings from "../components/FeaturedListings/FeaturedListings";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";

export default function HomePage() {
  const router = useRouter();
  return (
    <div className=" ">
      <div className=" min-h-[200px] pb-4 bg-primary-light  ">
        <Header></Header>
        <div className="flex gap-4 mt-8 flex-col justify-center items-center">
          <div className="font-sans font-light text-xs">Title image bg</div>

          <Button
            onClick={() => router.push("/CreateListing")}
            text={"Get Started"}
          ></Button>
        </div>
      </div>
      <div className="m-6">
        <div className="flex flex-col gap-4">
          <FeaturedListings></FeaturedListings>

          <div className="grid grid-cols-12 px-2 gap-5 font-sans font-light justify-evenly items-center border shadow-secondary-light border-secondary-light">
            <div className="col-span-8">3 lines about project i</div>
            <div className=" col-span-4 p-3 flex gap-12 flex-col justify-center items-center bg-primary-light ">
              <div className="mt-4">Have an event in mind? </div>
              <Button
                text="Get Started"
                className="bg-tertiary-light text-white px-5 py-2 font-sans rounded-lg font-normal text-sm border hover:shadow-md"
              ></Button>
            </div>
          </div>

          <div className="flex py-12 px-2 gap-5 justify-evenly items-center bg-tertiary-light">
            <div className="">Read heartwarming stories/testimonials</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-12 py-3 bg-primary-light">
        Footer
      </div>
    </div>
  );
}
