import React from "react";
import { Meteors } from "../components/aceternity/meoters";

export default function page() {
  return (
    <div className="w-11/12 p-8 top-0 mt-9 mx-auto  h-[calc(100vh-70px)]">
      <div>
        <h3 className="font-bold text-2xl">Hire me!</h3>
        <div className="text-black w-32 bg-white mt-2 self-start rounded-full  py-px text-xs  relative flex items-center gap-2 px-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>{" "}
          Need Client
        </div>
      </div>
      <div>
        <p className="w-2/4 mt-8 text-lg">
          Hey there I am Adnan Arodiya! Welcome to our Website Building Service!
          I'm the developer who will create awesome websites just for you. Let's
          work together to make a website that's perfect for what you need!
        </p>
      </div>
      <div className="">
        <div className=" w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Front-End
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I offer front-end development services tailored to my clients'
              needs. I focus on creating visually appealing and user-friendly
              websites, ensuring they work well on all devices. From layout
              design to intuitive navigation, I aim to exceed expectations and
              deliver outstanding results.
            </p>

            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Contact
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
