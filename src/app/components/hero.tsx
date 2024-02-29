import { ChevronsDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className=" w-11/12 p-8  flex mx-auto h-screen flex-col justify-center">
      <div>
        <h3 className=" md:text-2xl font-semibold ">
          Hello, My name is Adnan Arodiya .
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 md:mt-8">
          I build frontend stuffs.
        </h1>
        <h4 className=" mt-4 md:mt-8 md:text-2xl">
          I'm a frontend developer, who loves to craft things with frontend
          skills, based in India/Gujarat.
        </h4>

        <div>
          <Link href={"/resume.pdf"} target="_blank">
            <button className="btn bg-white text-black mt-8">Resume</button>
          </Link>
        </div>
      </div>
      <div className="w-100% flex justify-center  mt-12 animate-bounce">
        <ChevronsDown size={60} />
      </div>
    </div>
  );
}
