import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-11/12 px-8 py-4 mx-auto flex items-center h-[calc(100vh-10rem)] flex-col">
        <h1 className="text-3xl font-bold">About me</h1>
        <div className="flex mt-10 justify-evenly flex-col md:flex-row">
          <div className=" md:w-2/4 flex flex-col justify-center items-center text-xl italic order-last">
            <div className="flex text-sm mt-8 md:mt-0 text-center">
              {/* <div>
              <ChevronsRight />
            </div> */}
              Hi! I'm Adnan , a passionate front-end developer with a solid
              skill set in Next.js and React.js. I thrive on creating
              captivating user interfaces and am on a constant quest to learn
              and innovate. Currently exploring full-stack development.
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
      <div className="md:w-11/12 px-8 py-4 md:mx-auto flex md:items-center h-[calc(100vh-10rem)] flex-col relative mt-14 z-10">
        <h2 className="text-center mt-10 text-4xl font-bold mb-8">Timeline</h2>
        <div className="relative ">
          <div className="border-4 border-white absolute rounded-3xl md:left-2/4 md:-translate-x-2/4 h-[660px] md:h-96 left-6 md:right-2"></div>
          <div className="absolute p-4 bg-base-200 rounded-full md:left-2/4 md:-translate-x-2/4 md:right-2">
            <GraduationCap />
          </div>
          <div className="absolute p-4 bg-base-200 rounded-full top-52 md:top-48 md:left-2/4 md:-translate-x-2/4 md:right-2">
            <GraduationCap />
          </div>
          <div className="absolute p-4 bg-base-200 rounded-full top-[450px] md:top-[384px] md:left-2/4 md:-translate-x-2/4 md:right-2">
            <GraduationCap />
          </div>
        </div>
        <div className="card rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-rounded-tr-3xl md:rounded-tl-3xl md:rounded-tr-none md:rounded-bl-none md:rounded-br-rounded-tr-3xl  w-52 left-16 md:w-64 bg-base-200  md:right-44 top-14 md:top-8">
          <div className="card-body">
            <h2 className=" md:card-title text-base font-bold">High School</h2>
            <p className="text-sm md:text-base">2019 - 2021</p>
          </div>
        </div>
        <div className="card rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-rounded-tr-3xl   w-52 left-16 md:w-64 bg-base-200  md:right-44 top-36 md:top-24">
          <div className="card-body">
            <h2 className="md:card-title text-base font-bold  ">
              Uka Tarsadia University (CGPIT)
            </h2>
            <p className="text-sm md:text-base">2021 - 2024</p>
          </div>
        </div>
        <div className="card rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-rounded-tr-3xl md:rounded-tl-3xl md:rounded-tr-none md:rounded-bl-none md:rounded-br-rounded-tr-3xl  w-52 left-16 md:w-64 bg-base-200  md:right-44 top-56 md:top-36">
          <div className="card-body">
            <h2 className="md:card-title text-base font-bold">Internship at</h2>
            <p className="text-sm md:text-base">
              EnactOn Technologies Private Limited
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
