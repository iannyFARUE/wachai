import Image from "next/image";
import landromat from "@/public/laundry-bg.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black  overflow-hidden px-6">
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
          <span className="underline decoration-red-400 decoration-4 underline-offset-4">
            Your Home
          </span>
        </h1>

        <p className="max-w-xl text-base text-zinc-200 sm:text-lg">
          Drop off your clothes from anywhere. Real time tracking, automated
          alerts and agentic voice booking.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-full px-6 py-3 text-sm font-semibold shadow-lg ring-1 ring-red-400 hover:bg-red-600  bg-red-500">
            <Link href="/dropoff">Make a Dropoff</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
