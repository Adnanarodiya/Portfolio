import React from "react";
import { Meteors } from "../components/aceternity/meoters";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-11/12 p-8 top-0 mt-9 mx-auto  h-[calc(100vh+100px)]">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h3 className="font-bold text-3xl">Hire me!</h3>
        </div>
        <div className="text-black w-36 bg-white mt-4 self-start rounded-full  py-px text-xs  relative flex items-center gap-2 px-4 mx-auto">
          <span className="relative flex h-3 w-fit">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>{" "}
          Open to work
        </div>
      </div>
      <div className="flex justify-center">
        <p className="w-2/4 mt-8 text-lg text-center ">
          Hey there I am Adnan Arodiya! Welcome to our Website Building Service!
          I'm the developer who will create awesome websites just for you. Let's
          work together to make a website that's perfect for what you need!
        </p>
      </div>
      <div className="flex  justify-evenly">
        <div className="mt-8 flex gap-8">
          <div className=" w-full relative max-w-xs">
            <div className=" " />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800   h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div>
                <Image
                  src="/frontend.jpg"
                  alt="Front-End Developer"
                  width={650}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="p-4">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Front-End
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  I offer front-end development services tailored to my clients'
                  needs. I focus on creating visually appealing and
                  user-friendly websites, ensuring they work well on all
                  devices. From layout design to intuitive navigation, I aim to
                  exceed expectations and deliver outstanding results.
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
        <div className="mt-8 flex gap-8">
          <div className=" w-full relative max-w-xs">
            <div />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800   h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div>
                <Image
                  src="/backend.png"
                  alt="Back-End Developer"
                  width={650}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="p-4">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Back-End
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  Currently learning backend development, I'm diving into
                  server-side programming and database management. Proficient in
                  Python, Java, and frameworks like Django and Spring Boot, I'm
                  focused on optimizing server performance and ensuring data
                  security.
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
      </div>
    </div>
  );
}
