"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MarcaAyacucho from "@/public/Logos/MarcaAyacucho 1.svg";
import LinearProgress from '@mui/material/LinearProgress';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Configura el temporizador para redirigir después de 5 segundos (5000 milisegundos)
    const timer = setTimeout(() => {
      router.push("/receipe"); // Cambia '/tu-destino' por la ruta a la que deseas redirigir
    }, 5000); // Ajusta el tiempo según sea necesario

    // Limpieza al desmontar el componente
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-screen w-screen items-center justify-center p-10 bg-white">
      <div>
        <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold my-4 text-center">
          ¿Imatataq kunan yanunki?
        </h1>
        <div className="flex justify-center">
          <Image
            src={MarcaAyacucho}
            alt="Logo"
            width={100} // Ajusta según sea necesario
            height={100} // Ajusta según sea necesario
            priority
          />
        </div>
        <LinearProgress />
      </div>
    </div>
  );
}
