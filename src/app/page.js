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

        
        

      </div>
    </div>
  );
}
