import Image from "next/image";
import React from "react";

const AboutComp = () => {
  return (
    <div className="w-11/12 px-8 py-4 mx-auto flex items-center h-[calc(100vh-10rem)] flex-col">
      <h1 className="text-3xl font-bold">About me</h1>
      <div className="flex mt-10 justify-evenly flex-col md:flex-row">
        <div className=" md:w-2/4 flex flex-col justify-center items-center text-xl italic order-last">
          <div className="flex text-sm mt-8 md:mt-0 text-center">
            {/* <div>
                <ChevronsRight />
              </div> */}
            Hi! I'm Adnan , a passionate front-end developer with a solid skill
            set in Next.js and React.js. I thrive on creating captivating user
            interfaces and am on a constant quest to learn and innovate.
            Currently exploring full-stack development.
          </div>
        </div>
        <div>
          <Image
            src="/2.jpg"
            className="rounded-3xl z-auto"
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
