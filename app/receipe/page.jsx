import React from "react";
import Image from "next/image";
import MarcaAyacucho from "@/public/Logos/MarcaAyacucho 1.svg";

export default function Page() {
  return (
    <div className="h-screen w-screen  p-10 bg-white">
      <div className="flex flex-row items-start w-full h-full">
        <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold my-4">
          ¿Imatataq kunan yanunki?
        </h1>
        <Image
          src={MarcaAyacucho}
          alt="Logo"
          width={100} // Ajusta según sea necesario
          height={100} // Ajusta según sea necesario
          priority
        />
      </div>
    </div>
  );
}
