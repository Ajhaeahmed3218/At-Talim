import DotGrid from "@/Animations/BG_Animation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* DotGrid as full-page background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <DotGrid
          dotSize={6}
          gap={15}
          baseColor="#eaecf0"
          activeColor="#F9F5BC"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <div className=" lg:w-[500px] lg:h-[500px]">
          <img className="w-full h-full object-contain" src="logo.png" alt="Logo" />
        </div>

        {/* Optional content */}
        {/* 
        <h1 className="text-4xl text-black font-bold mt-10">
          Welcome to At-Talim
        </h1>
        <p className="text-gray-600 mt-4">
          Your journey to knowledge starts here.
        </p>
        <div className="mt-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
        */}
      </div>
    </div>
  );
}
