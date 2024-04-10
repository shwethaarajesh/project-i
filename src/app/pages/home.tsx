import Image from "next/image";

export default function HomePage() {
  return (
    <div className="">
      <div className=" p-4 bg-primary-light  ">Header</div>
      <div className="m-6">
        <div className="flex flex-col gap-4">
          <div className="bg-tertiary-light p-12">
            <div>Block with image banner and redirect to all postings</div>
          </div>
          <div className="bg-primary-light ">
            <div className="flex gap-4">
              <div>Featured events/news</div>
              <div>CTA view all listings</div>
            </div>

            <div className="bg-secondary-light p-12">Listings</div>
          </div>
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
