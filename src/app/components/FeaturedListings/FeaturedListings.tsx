import Image from "next/image";
import Button from "../Button/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function FeaturedListings() {
  return (
    <div className="">
      <div className="flex justify-between py-3 px-3 items-center gap-4 text-[15px] bg-primary-light font-sans font-[380] ">
        <div>Featured events</div>
        <Button text="View all"></Button>
      </div>

      <div className="border-primary-light border p-12">Listings</div>
    </div>
  );
}
