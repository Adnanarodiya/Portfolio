import { ChevronsDown, ChevronsRight } from "lucide-react";
import { SparklesCore } from "./components/aceternity/sparkles";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full absolute inset-0 ">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          particleSize={0}
          speed={0.1}
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="w-11/12 p-8  flex mx-auto h-screen flex-col justify-center">
        <div>
          <h3 className="text-2xl font-semibold ">
            Hello, My name is Adnan Arodiya .
          </h3>
          <h1 className="text-6xl font-bold mt-8">I build frontend stuffs.</h1>
          <h4 className="mt-8 text-2xl">
            I'm a frontend developer, who loves to craft things with frontend
            skills, based in India/Gujarat.
          </h4>

          <div>
            <button className="btn bg-white text-black mt-8">Resume</button>
          </div>
        </div>
        <div className="w-100% flex justify-center  mt-12 animate-bounce">
          <ChevronsDown size={60} />
        </div>
      </div>
      <div className="w-11/12 px-8 py-4 mx-auto flex items-center h-[calc(100vh-10rem)] flex-col">
        <h1 className="text-3xl font-bold">About me</h1>
        <div className="flex mt-10 justify-evenly">
          <div className="w-2/4 flex flex-col justify-center items-center text-xl italic">
            <div className="flex">
              <div>
                <ChevronsRight />
              </div>
              Hi! I'm Adnan , a passionate front-end developer with a solid
              skill set in Next.js and React.js. I thrive on creating
              captivating user interfaces and am on a constant quest to learn
              and innovate. Currently exploring full-stack development, I bring
              creativity and precision to every project. Let's craft something
              extraordinary together!
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
    </div>
  );
}
