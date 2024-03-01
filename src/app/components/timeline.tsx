import { GraduationCap } from "lucide-react";

export default function Timeline() {
  return (
    <div className="md:w-11/12 h-[800px] px-8 py-4 md:mx-auto flex md:items-center md:h-[calc(100vh-10rem)]   flex-col relative z-10">
      <h2 className="text-center mt-10 text-4xl font-bold mb-8">Timeline</h2>
      <div className="relative ">
        <div className="border-4 border-white absolute rounded-3xl md:left-2/4 md:-translate-x-2/4 h-[660px] md:h-96 left-6 "></div>
        <div className="absolute md:relative p-4 bg-base-200 rounded-full md:left-2/4 md:-translate-x-2/4 ">
          <GraduationCap />
        </div>
        <div className="absolute p-4 bg-base-200 rounded-full top-52 md:top-48 md:left-2/4 md:-translate-x-2/4 ">
          <GraduationCap />
        </div>
        <div className="absolute p-4 bg-base-200 rounded-full top-[450px] md:top-[384px] md:left-2/4 md:-translate-x-2/4 ">
          <GraduationCap />
        </div>
      </div>
      <div className="card rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-rounded-tr-3xl md:rounded-tl-3xl md:rounded-tr-none md:rounded-bl-none md:rounded-br-rounded-tr-3xl  w-3/4 left-16 md:right-96  md:w-64 bg-base-200   top-14 md:top-8 ">
        <div className="card-body">
          <h2 className=" md:card-title text-base font-bold">High School</h2>
          <p className="text-sm md:text-base">2019 - 2021</p>
        </div>
      </div>
      <div className="card rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-rounded-tr-3xl    left-16 md:w-64 bg-base-200  md:right-44 top-36 md:top-24  w-3/4">
        <div className="card-body">
          <h2 className="md:card-title text-base font-bold  ">
            Uka Tarsadia University (CGPIT)
          </h2>
          <p className="text-sm md:text-base">2021 - 2024</p>
        </div>
      </div>
      <div className="card rounded-tr-3xl rounded-tl-none rounded-br-none rounded-bl-rounded-tr-3xl md:rounded-tl-3xl md:rounded-tr-none md:rounded-bl-none md:rounded-br-rounded-tr-3xl   w-3/4 left-16 md:w-64 bg-base-200  md:right-44 top-56 md:top-36">
        <div className="card-body">
          <h2 className="md:card-title text-base font-bold">Internship at</h2>
          <p className="text-sm md:text-base">
            EnactOn Technologies Private Limited
          </p>
        </div>
      </div>
    </div>
  );
}
