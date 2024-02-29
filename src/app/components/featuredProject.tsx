import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProject() {
  return (
    <div>
      <div className="md:w-11/12 h-[460px] px-8 py-4 md:mx-auto flex md:items-center md:h-[calc(100vh-10rem)]   flex-col relative mt-14 z-10">
        <h2 className="text-center mt-10 text-2xl md:text-4xl font-bold ">
          Featured Projects
        </h2>
        <p className="text-center mt-1 text-base md:text-2xl  mb-8">
          Some things I've built:
        </p>
        <div>
          <div className="flex items-center gap-4">
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
          <h3 className="mt-5 font-bold">QuikMart</h3>
          <p className="my-5 text-sm">
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
    </div>
  );
}
