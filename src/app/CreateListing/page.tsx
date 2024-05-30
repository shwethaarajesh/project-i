"use client";
import Button from "../components/Button/Button";
import { useRouter } from "next/navigation";
import FormComponent from "../components/FormComponent/FormComponent";
import Header from "../components/Header/Header";
import { ChangeEvent, useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import FormDropdown from "../components/FormDropdown/FormDropdown";
import { MdDeleteOutline } from "react-icons/md";

interface ILocation {
  cities: string[];
  country: string;
  iso2: string;
  iso3: string;
}
export default function CreateListing() {
  const router = useRouter();

  const [eventName, setEventName] = useState("");
  const [genre, setGenre] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isAgeLimitBroken, setIsAgeLimitBroken] = useState(false);
  const [noOfPeople, setNoOfPeople] = useState("");
  const [location, setLocation] = useState("");
  const [eventType, setEventType] = useState("");
  const [enrollBy, setEntrollBy] = useState("");
  const [description, setDescription] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [gender, setGender] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState([""]);
  const [allLocations, setAllLocations] = useState<ILocation[]>([]);
  const [allCities, setAllCities] = useState<string[]>([]);
  const [allCountries, setAllCountries] = useState<string[]>([]);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [isEventNameError, setIsEventNameError] = useState(false);
  const [isGenreError, setIsGenreError] = useState(false);
  const [isNoPeopleError, setIsNoPeopleError] = useState(false);
  const [isCountryError, setIsCountryError] = useState(false);
  const [isCityError, setIsCityError] = useState(false);
  const [isEventTypeError, setIsEventTypeError] = useState(false);
  const [isEnrollByError, setIsEnrollByError] = useState(false);
  const [isDescriptionError, setIsDescriptionError] = useState(false);
  const [isGenderError, setIsGenderError] = useState(false);
  const [isAgeError, setIsAgeError] = useState(false);
  const [isEventDateError, setIsEventDateError] = useState(false);
  const [isEventTimeError, setIsEventTimeError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>();
  const [imageName, setImageName] = useState<string>("");

  const onChangeEventName = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEventNameError(false);
    setEventName(event.target.value);
  };

  const onChangeGenre = (event: ChangeEvent<HTMLInputElement>) => {
    setIsGenreError(false);
    setGenre(event.target.value);
  };

  const onChangenNoOfPeople = (event: ChangeEvent<HTMLInputElement>) => {
    if (/^\d*$/.test(event.target.value)) {
      setIsNoPeopleError(false);
      setNoOfPeople(event.target.value);
    }
  };

  const onChangenEventType = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEventTypeError(false);
    setEventType(event.target.value);
  };

  const onChangeEnrollBy = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEnrollByError(false);
    setEntrollBy(event.target.value);
  };

  const onChangeEventDate = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEventDateError(false);
    setEventDate(event.target.value);
  };
  const onChangeEventTime = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEventTimeError(false);
    setEventTime(event.target.value);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDescriptionError(false);
    setDescription(event.target.value);
  };

  const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    if (/^\d*$/.test(event.target.value)) {
      setIsAgeLimitBroken(false);
      setIsAgeError(false);
      setAgeLimit(event.target.value);
    }
  };

  const onChangeCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setIsCountryError(false);
    const countryDetails = allLocations.find(
      (eachCountry) => eachCountry.country == event.target.value
    );
    if (countryDetails?.cities) {
      setAllCities(countryDetails?.cities);
    }
    setCountry(event.target.value);
  };

  const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setIsCityError(false);
    setCity(event.target.value);
    setLocation(country + "," + event.target.value);
  };

  const onChangeGender = (event: ChangeEvent<HTMLInputElement>) => {
    setIsGenderError(false);
    setGender(event.target.value);
  };

  const onChangeSocialLinks = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedLinks = socialMediaLinks.map((link, i) =>
      i === index ? event.target.value : link
    );
    setSocialMediaLinks(updatedLinks);
  };

  const onClickAddSocialLink = () => {
    const copy = structuredClone(socialMediaLinks);
    copy.push("");
    setSocialMediaLinks(copy);
  };

  const onClickRemoveSocialLink = (index: number) => {
    const updatedLinks = [
      ...socialMediaLinks.slice(0, index),
      ...socialMediaLinks.slice(index + 1),
    ];
    setSocialMediaLinks(updatedLinks);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      setImageName(e.target.files[0].name);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = () => {
    const age = parseInt(ageLimit);
    let errorState = false;
    if (age < 16 || age > 70) {
      setIsAgeLimitBroken(true);
      errorState = true;
    }
    if (!ageLimit) {
      setIsAgeError(true);
      errorState = true;
    }
    if (!eventName) {
      setIsEventNameError(true);
      errorState = true;
    }
    if (!genre) {
      setIsGenreError(true);
      errorState = true;
    }
    if (!noOfPeople) {
      setIsNoPeopleError(true);
      errorState = true;
    }
    if (!country) {
      setIsCountryError(true);
      errorState = true;
    }
    if (!city) {
      setIsCityError(true);
      errorState = true;
    }
    if (!eventType) {
      setIsEventTypeError(true);
      errorState = true;
    }

    if (!enrollBy) {
      setIsEnrollByError(true);
      errorState = true;
    }
    if (!description) {
      setIsDescriptionError(true);
      errorState = true;
    }
    if (!gender) {
      setIsGenderError(true);
      errorState = true;
    }
    if (!eventTime) {
      setIsEventTimeError(true);
      errorState = true;
    }
    if (!eventDate) {
      setIsEventDateError(true);
      errorState = true;
    }
    if (errorState) {
      return;
    }
    const eventJson = {
      eventName: eventName,
      eventGenre: genre,
      noOfPeople: noOfPeople,
      location: location,
      eventType: eventType,
      enrollBy: enrollBy,
      description: description,
      ageLimit: ageLimit,
      preferredGender: gender,
      socialMediaLinks: socialMediaLinks,
      eventImage: imageSrc,
    };
    console.log("Submitted", eventJson);
    router.push("/Home");
  };

  const getLocations = async () => {
    const res = await fetch(`https://countriesnow.space/api/v0.1/countries`);
    return res.json();
  };

  const eventTypes = ["Outdoors", "Indoors", "Online"];
  const commonGenres = ["Movie", "Picnic", "Shopping", "Concert"];
  const preferredGenders = ["Male", "Female", "Transgender", "Any"];

  useEffect(() => {
    getLocations().then((res) => {
      console.log("LOCATIONSSS", res);
      const countryList = res.data.map((eachCountry: any) => {
        return eachCountry.country;
      });
      setAllCountries(countryList);
      setAllLocations(res.data);
    });
  }, []);

  return (
    <div className="">
      <div className="bg-primary-light p-4">
        <Header></Header>
      </div>
      <div className="m-6 p-8 border-[3px] border-primary-light border-solid ">
        <div className="flex flex-col gap-6">
          <div>
            <FormComponent
              header={"Event Name"}
              stateName={eventName}
              onChangeEventName={onChangeEventName}
              onFocus={() => setIsFocused(false)}
            ></FormComponent>
            {isEventNameError && (
              <div className=" mt-2 font-sans font-light text-xs text-red-500">
                Required
              </div>
            )}
          </div>
          <div>
            <FormComponent
              header={"Genre of event"}
              stateName={genre}
              onChangeEventName={onChangeGenre}
              onFocus={() => setIsFocused(true)}
            ></FormComponent>
            {isGenreError && (
              <div className=" mt-2 font-sans font-light text-xs text-red-500">
                Required
              </div>
            )}
          </div>
          {isFocused && (
            <div>
              <div className="font-sans font-light text-xs italic mb-3">
                People commonly choose
              </div>
              <div className="flex gap-4">
                {commonGenres.map((eachgenre) => {
                  return (
                    <div
                      key={eachgenre}
                      className={`w-auto cursor-pointer px-5 py-[10px] rounded-2xl font-sans font-light text-xs italic ${
                        eachgenre == genre
                          ? "bg-secondary-light"
                          : "bg-secondary-extralight shadow-sm"
                      }`}
                      onClick={() => {
                        setGenre(eachgenre);
                        setIsGenreError(false);
                      }}
                    >
                      {eachgenre}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <FormComponent
                header={"Number of people needed"}
                stateName={noOfPeople}
                onChangeEventName={onChangenNoOfPeople}
                onFocus={() => setIsFocused(false)}
              ></FormComponent>
              {isNoPeopleError && (
                <div className=" mt-2 font-sans font-light text-xs text-red-500">
                  Required
                </div>
              )}
            </div>
            <div className="flex gap-4">
              <div>
                <FormDropdown
                  header={"Country"}
                  stateName={country}
                  className={"w-full"}
                  onChangeEvent={onChangeCountry}
                  onFocus={() => setIsFocused(false)}
                  selectedOption={country}
                  options={allCountries}
                ></FormDropdown>
                {isCountryError && (
                  <div className=" mt-2 font-sans font-light text-xs text-red-500">
                    Required
                  </div>
                )}
              </div>
              {country && (
                <div>
                  <FormDropdown
                    header={"City"}
                    stateName={city}
                    className={"w-full"}
                    onChangeEvent={onChangeCity}
                    onFocus={() => setIsFocused(false)}
                    selectedOption={city}
                    options={allCities}
                  ></FormDropdown>
                  {isCityError && (
                    <div className=" mt-2 font-sans font-light text-xs text-red-500">
                      Required
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              {" "}
              <FormDropdown
                header={"Event type"}
                stateName={eventType}
                onChangeEvent={onChangenEventType}
                options={eventTypes}
                selectedOption={eventType}
                onFocus={() => setIsFocused(false)}
              ></FormDropdown>
              {isEventTypeError && (
                <div className=" mt-2 font-sans font-light text-xs text-red-500">
                  Required
                </div>
              )}
            </div>
            <div>
              <FormComponent
                header={"Enroll by (Date)"}
                stateName={enrollBy}
                onChangeEventName={onChangeEnrollBy}
                useCalendar={true}
                onFocus={() => setIsFocused(false)}
              ></FormComponent>
              {isEnrollByError && (
                <div className=" mt-2 font-sans font-light text-xs text-red-500">
                  Required
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              {" "}
              <FormComponent
                header={"Event Date (Date)"}
                stateName={eventDate}
                onChangeEventName={onChangeEventDate}
                useCalendar={true}
                onFocus={() => setIsFocused(false)}
              ></FormComponent>
              {isEventDateError && (
                <div className=" mt-2 font-sans font-light text-xs text-red-500">
                  Required
                </div>
              )}
            </div>
            <div>
              <FormComponent
                header={"Event Time"}
                stateName={eventTime}
                onChangeEventName={onChangeEventTime}
                useTime={true}
                onFocus={() => setIsFocused(false)}
              ></FormComponent>
              {isEventTimeError && (
                <div className=" mt-2 font-sans font-light text-xs text-red-500">
                  Required
                </div>
              )}
            </div>
          </div>
          <div>
            {" "}
            <FormComponent
              header={"Description"}
              stateName={description}
              onChangeEventName={onChangeDescription}
              onFocus={() => setIsFocused(false)}
              useTextArea={true}
            ></FormComponent>
            {isDescriptionError && (
              <div className=" mt-2 font-sans font-light text-xs text-red-500">
                Required
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <FormComponent
                header={"Age limit (Between 16-70)"}
                stateName={ageLimit}
                onChangeEventName={onChangeAge}
                onFocus={() => setIsFocused(false)}
              ></FormComponent>
              {isAgeLimitBroken && (
                <div className=" mt-2 font-sans font-light text-xs text-red-500">
                  Age can be between 16 - 70 only{" "}
                </div>
              )}
              {isAgeError && (
                <div className=" mt-2 font-sans font-light text-xs text-red-500">
                  Required
                </div>
              )}
            </div>
            <div>
              <FormDropdown
                header={"Preferred gender"}
                stateName={gender}
                onChangeEvent={onChangeGender}
                options={preferredGenders}
                selectedOption={gender}
                onFocus={() => setIsFocused(false)}
              ></FormDropdown>
              {isGenderError && (
                <div className=" mt-2 font-sans font-light text-xs text-red-500">
                  Required{" "}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-sans font-light text-xs">
              {"Social media links (Max:3) (Optional)"}
            </div>
            {socialMediaLinks.map((eachLink, index) => {
              return (
                <div className="flex gap-3 " key={index}>
                  <div className="w-[90%]">
                    <input
                      className="w-full bg-secondary-extralight p-2 drop-shadow-md font-sans font-light text-md"
                      type="text"
                      value={socialMediaLinks[index]}
                      onChange={(e: any) => {
                        onChangeSocialLinks(e, index);
                      }}
                      onFocus={() => {
                        setIsFocused(false);
                      }}
                    />
                  </div>
                  <div className="w-[5%] flex justify-center items-center">
                    {index == socialMediaLinks.length - 1 && index != 2 && (
                      <div
                        className=" cursor-pointer  "
                        onClick={onClickAddSocialLink}
                      >
                        <IoMdAdd size={16}></IoMdAdd>
                      </div>
                    )}
                    {(index > 0 ||
                      (index == 0 && socialMediaLinks.length > 1)) && (
                      <div
                        className=" cursor-pointer  "
                        onClick={() => {
                          onClickRemoveSocialLink(index);
                        }}
                      >
                        <FiMinus size={16}></FiMinus>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="font-sans font-light text-xs mb-4">
              {"Event image (Optional)"}
            </div>
            <div className="flex gap-4  items-center">
              <label
                htmlFor="files"
                className=" min-w-[90px] w-[30%] hover:shadow-xl bg-secondary-extralight cursor-pointer p-2 drop-shadow-md font-sans font-light text-md"
              >
                Select Image
              </label>
              <input
                id="files"
                accept="image/*"
                onChange={handleImageChange}
                className="invisible w-0"
                type="file"
              />
              {imageSrc && (
                <div className="flex gap-2 items-center justify-center">
                  <div className="truncate font-sans font-light text-xs">
                    {imageName}
                  </div>
                  {imageSrc && (
                    <MdDeleteOutline
                      onClick={() => {
                        setImageName("");
                        setImageSrc(undefined);
                      }}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
          {/* <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4 bg-secondary-extralight p-2 drop-shadow-md font-sans font-light text-md"
          /> */}
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Uploaded Preview"
              className="w-64 h-64 object-cover"
            />
          )}
          <Button
            onClick={() => {
              console.log("hi");
              onSubmit();
            }}
            containerClassName="w-full flex justify-center items-center"
            className="mt-6 flex justify-center items-center  bg-secondary-light px-5 py-2 font-sans rounded-lg font-light text-sm border shadow-md hover:shadow-xl"
            text={"Create Event Now !"}
          ></Button>
        </div>
      </div>
    </div>
  );
}
