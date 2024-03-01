import Image from "next/image";
import React from "react";

const AboutComp = () => {
  return (
    <div className="w-11/12 px-8 py-4 mx-auto flex items-center  flex-col">
      <h1 className="text-3xl font-bold">About me</h1>
      <div className="flex mt-10 justify-evenly flex-col lg:flex-row">
        <div className=" lg:w-2/4 flex flex-col justify-center items-center text-xl italic order-last lg:order-first">
          <div className="list-disc flex text-sm mt-8 lg:text-2xl  md:mt-8 text-center lg:text-start ">
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
