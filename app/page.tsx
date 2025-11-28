import Image from "next/image";
import landromat from "@/public/laundry-bg.jpg";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black  overflow-hidden">
      <Image
        alt="Landromat"
        src={landromat}
        fill
        placeholder="blur"
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col w-full max-w-3xl gap-6 px6 py-16 text-center text-white sm:text-left">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-200">
          Smart Laundry <span>&#9679;</span> 24/7 Service
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Bring The Landromat into{" "}
          <span className="underline decoration-indigo-400 decoration-4 underline-offset-4">
            Your Home
          </span>
        </h1>
      </div>
    </div>
  );
}
