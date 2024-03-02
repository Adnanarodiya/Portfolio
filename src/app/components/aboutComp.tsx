import Image from "next/image";
import React from "react";

const AboutComp = () => {
  return (
    <div className="w-11/12 px-8 py-4 mx-auto flex items-center  flex-col">
      <h1 className="text-3xl font-bold">About me</h1>
      <div className="flex mt-10 justify-evenly flex-col lg:flex-row">
        <div className=" lg:w-2/4 flex flex-col justify-center items-center text-xl italic order-last lg:order-first">
          <div className="list-disc  text-sm mt-8 lg:text-2xl  md:mt-8 text-center lg:text-start ">
            <div className="justify-start flex">
              {/* <div>
                <ChevronsRight />
              </div> */}
              <li className="list-disc">
                Hi! I'm Adnan , a passionate front-end developer with a solid
                skill set in Next.js and React.js. I thrive on creating
                captivating user interfaces and am on a constant quest to learn
                and innovate. Currently exploring full-stack development.
              </li>
            </div>
          </div>
          <div className="text-black bg-white mt-6 self-start rounded-full  py-px text-xs  relative flex items-center gap-2 px-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>{" "}
            Need Client
          </div>
        </div>

        <div>
          <Image
            src="/2.jpg"
            className="rounded-3xl z-auto mx-auto lg:mx-0"
            alt="Adnan Arodiya"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
