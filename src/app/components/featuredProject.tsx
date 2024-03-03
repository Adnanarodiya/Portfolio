import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProject() {
  return (
    <div>
      <div className="md:w-11/12 sm:h-[900px] md:h-[800px] lg:h-[1100px] px-8 py-4 md:mx-auto flex md:items-center flex-col relative mt-14 z-10">
        <h2 className="text-center mt-10 text-2xl md:text-4xl font-bold ">
          Featured Projects
        </h2>
        <p className="text-center mt-1 text-base md:text-2xl  mb-8">
          Some things I've built:
        </p>
        <div>
          <div className="md:flex md:gap-8 items-center">
            <div className="flex items-center gap-4 md:w-3/5">
              <div>
                <Image
                  src="/lapQuikMart.png"
                  className=" z-auto"
                  alt="Adnan Arodiya"
                  height={500}
                  width={500}
                />
              </div>
              <div>
                <Image
                  src="/mobQuikMart.png"
                  className=" w-44 h-auto z-auto"
                  alt="Adnan Arodiya"
                  height={150}
                  width={150}
                />
              </div>
            </div>
            <div className="md:w-2/5">
              <h3 className="mt-5 font-bold md:text-lg lg:text-xl">QuikMart</h3>
              <p className=" md:w-64 lg:w-72  md:text-base lg:text-lg my-5 text-sm">
                A front-end simulation of real-world e-commerce app (built with
                Next.js and Firebase).
              </p>
              <div className="flex gap-4">
                <Link
                  className=" cursor-pointer"
                  target="_blank"
                  href={"https://github.com/Adnanarodiya/QuikMart"}
                >
                  <Github />
                </Link>
                <Link
                  className=" cursor-pointer"
                  target="_blank"
                  href={"https://quik-mart.vercel.app/"}
                >
                  <ExternalLink />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-8 md:flex md:gap-8 items-center flex flex-col md:flex-row">
            <div className="md:w-2/5 flex flex-col order-last md:order-first">
              <h3 className="mt-5 font-bold md:text-lg lg:text-xl ">Foodies</h3>
              <p className="md:w-64 lg:w-72  md:text-base lg:text-lg my-5 text-sm">
                A front-end design just for fun nad learning about tailwindcss.
              </p>
              <div className="flex gap-4">
                <Link
                  className=" cursor-pointer"
                  target="_blank"
                  href={"https://github.com/Adnanarodiya/Foodies"}
                >
                  <Github />
                </Link>
                <Link
                  className=" cursor-pointer"
                  target="_blank"
                  href={"https://foodies-black.vercel.app/"}
                >
                  <ExternalLink />
                </Link>
              </div>
            </div>
            <div className="flex  items-center gap-4 md:w-3/5">
              <div>
                <Image
                  src="/lapFoodies.png"
                  className=" z-auto"
                  alt="Adnan Arodiya"
                  height={500}
                  width={500}
                />
              </div>
              <div>
                <Image
                  src="/mobFoodies.png"
                  className=" w-44 h-auto z-auto"
                  alt="Adnan Arodiya"
                  height={150}
                  width={150}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
