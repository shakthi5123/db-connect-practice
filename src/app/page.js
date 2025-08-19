
"use client";

// import siteData from "../data/siteData.json" 
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { FaInternetExplorer } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {FaMoon, FaSun} from "react-icons/fa"

// import { useTheme } from "@/context/ThemeContext";

// const hotelInfoData = siteData.hotelInfo


export default function HotelInfo() {

   const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch("/api/hotel")
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, []);

  if (!hotel) return <p>Loading...</p>;

  const { darkMode, toggleTheme } = useTheme();

  // const {
  //   name,
  //   image,
  //   description,
  //   address,
  //   whatsup,
  //   phone,
  //   phoneLink,
  //   email,
  //   emailLink,
  //   locationLink,
  //   location,
  //   website,
  //   websiteLink,
  //   socials,
  // } = hotelInfoData;
  return (
    <section className="container max-w-[735px] px-4 pt-3 w-full mx-auto mb-8  ">
      {/* section mei px-4 pt-3  */}
      
      <div className="shadow-xl w-full  mt-5 p-6 mx-auto bg-[#eceeee]  rounded-xl neumorphic">
        {/* <ThemeProvider /> */}


         {/* Toggle Button */}
      <div className="flex justify-end">
        <button
          onClick={toggleTheme}
          className="p-2 text-xl bg-[#eceeee] dark:bg-[#2a2a2a] rounded-full shadow-md hover:scale-110 transition-transform"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
        </button>
      </div>



        {/* img-logo  */}
        <div className="mb-4 ">
          <img
            src={image}
            alt="Altruist logo"
            className="w-full max-w-[381px] h-auto object-contain"
          />
        </div>

        <h1 className="text-3xl font-semibold light-text dark-text ">{name}</h1>

        <p className="text-sm italic break-words sm:break-normal light-text dark-text font-normal leading-normal">
          {address}
        </p>


        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* WhatsApp Button */}
          <a
            href={whatsup}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="w-full flex items-center justify-center gap-2 rounded-lg py-2 font-medium  light-text dark-text bg-[#eceeee] relative transition-all duration-300 ease-in-out hover:scale-[1.03] neumorphic neumorphic-hover">
              <FaWhatsapp />
              WhatsApp
            </button>
          </a>

          {/* Call Button */}
          <a href={phoneLink} className="w-full">
            <button className="w-full flex items-center justify-center gap-2 rounded-lg py-2 font-medium light-text dark-text  bg-[#eceeee] relative transition-all duration-300 ease-in-out hover:scale-[1.03] neumorphic neumorphic-hover">
              <IoMdCall />
              Call
            </button>
          </a>
        </div>

        <p className="mt-4 text-[16px] break-words sm:break-normal light-text dark-text font-medium leading-normal">
          {description}
        </p>

        {/* contact-info */}
        <div className="text-lg flex flex-col justify-center item-center font-semibold mt-4 space-y-2 text-left">
          <div className="flex items-center gap-2 hover:light-text dark-text  hover:scale-101 transition-transform duration-300">
            <IoMdCall className="light-text dark-text cursor-pointer  " />
            <a
              href={phoneLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {phone}
            </a>
          </div>

          <div className="flex gap-2 hover:text-blue-600 hover:scale-101 transition-transform duration-300  items-center hover:underline">
            <IoMdMail className="light-text dark-text cursor-pointer " />
            <a
              href={emailLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {email}
            </a>
          </div>

          <div className="flex gap-2  items-center hover:underline hover:light-text dark-text hover:scale-101 transition-transform duration-300">
            <GrLocation className="light-text dark-text cursor-pointer" />
            <a
              href={locationLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {location}
            </a>
          </div>

          <div className="flex gap-2 items-center hover:underline hover:light-text dark-text hover:scale-101 transition-transform duration-300">
            <FaInternetExplorer className="light-text dark-text cursor-pointer" />
            <a
              href={websiteLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {website}
            </a>
          </div>

          {/* Social Media Links  */}

          <div className="mt-6 flex justify-center gap-5 text-gray-600 text-xl">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#eceeee] shadow-md text-[#0A66C2] hover:scale-115 transition-transform duration-300 cursor-pointer neumorphic neumorphic-hover"
            >
              <FaLinkedin />
            </a>
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#eceeee] shadow-md text-[#1877F2] hover:scale-115 transition-transform duration-300 cursor-pointer neumorphic neumorphic-hover"
            >
              <FaFacebook />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#eceeee] shadow-md text-[#e73563] hover:scale-115 transition-transform duration-300 cursor-pointer neumorphic neumorphic-hover"
            >
              <FaInstagram />
            </a>
            <a
              href={socials.youtube}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#eceeee] shadow-md text-[#FF0000] hover:scale-115 transition-transform duration-300 cursor-pointer neumorphic neumorphic-hover"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

