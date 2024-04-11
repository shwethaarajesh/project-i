import Image from "next/image";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import FeaturedListings from "../components/FeaturedListings/FeaturedListings";
import Button from "../components/Button/Button";

export default function HomePage() {
  return (
    <div className=" ">
      <div className=" p-4 h-[200px] bg-primary-light  ">
        <div className="grid gap-4 font-sans grid-cols-12 font-light items-center ">
          <button>
            <GoHome />
          </button>
          <div className=" flex gap-4 col-span-10 justify-center text-sm">
            <div className="p-3 hover:cursor-pointer border-b-2 border-transparent hover:border-secondary-light">
              Create Event
            </div>
            <div className="p-3 hover:cursor-pointer border-b-2 border-transparent hover:border-secondary-light">
              View Events
            </div>
          </div>
          <button className="flex">
            <CgProfile />
            <IoMdArrowDropdown />
          </button>
        </div>
        <div className="flex gap-4 mt-8 flex-col justify-center items-center">
          <div className="font-sans font-light text-xs">Title image bg</div>
          <Button text={"Get Started"}></Button>
        </div>
      </div>
      <div className="m-6">
        <div className="flex flex-col gap-4">
          <FeaturedListings></FeaturedListings>
          <div className="flex px-2 gap-5 justify-evenly items-center bg-primary-light">
            <div className="w-8/12">color block with picture</div>
            <div className="w-4/12 p-12 bg-secondary-light">
              Button to create a posting
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
