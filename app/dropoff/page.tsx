import React from "react";
import laundromat from "@/public/laundry-bg.jpg";
import Image from "next/image";

export default function Dropoff() {
  return (
    <div className="w-full min-h-screen relative flex justify-center items-center">
      <Image src={laundromat} fill alt="Landromat" />
      <div className="bg-black/50 absolute inset-0" />
      <div className="bg-zinc-200 z-10 absolute px-6 py-6 min-w-xl">
        <h2 className="font-bold text-zinc-500 text-xl tracking-normal mb-4 max-w-3xl">
          Make booking
        </h2>
        <div className="flex gap-3 flex-col mt-8">
          <label className="font-semibold text-zinc-500 m-0">Name</label>
          <input
            type="text"
            className="border-2 py-2 w-full rounded-lg border-zinc-400"
          />
        </div>
        <div className="flex gap-3 flex-col mt-8">
          <label className="font-semibold text-zinc-500 ">Address</label>
          <input
            type="text"
            className="border-2 py-2 w-full rounded-lg border-zinc-400"
          />
        </div>
        <div className="flex gap-3 flex-col mt-8">
          <label className="font-semibold text-zinc-500 ">Phone Number</label>
          <input
            type="text"
            className="border-2 py-2 w-full rounded-lg border-zinc-400"
          />
        </div>
        <div className="mt-8">
          <label className="font-semibold text-zinc-500 ">
            Special Instructions
          </label>
          <div className="flex gap-3 mt-8">
            <div className="flex">
              <label className="font-semibold text-zinc-500 ">
                Separate wash
              </label>
              <input
                type="checkbox"
                className="border-2 py-1 w-full rounded-lg border-zinc-400"
              />
            </div>
            <div className="flex">
              <label className="font-semibold text-zinc-500 ">Hand dried</label>
              <input
                type="checkbox"
                className="border-2 py-2 w-full rounded-lg border-zinc-400"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-col mt-8">
          <label className="font-semibold text-zinc-500 ">
            Additional Information
          </label>
          <textarea className="border-2 py-2 w-full rounded-lg border-zinc-400"></textarea>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-sm mt-6 hover:bg-indigo-900">
          Submit
        </button>
      </div>
    </div>
  );
}
