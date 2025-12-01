import React from "react";
import laundromat from "@/public/laundry-bg.jpg";
import Image from "next/image";

export default function Dropoff() {
  return (
    <div className="w-full min-h-screen relative flex justify-center items-center">
      <Image src={laundromat} fill alt="Landromat" />
      <div className="bg-black/50 absolute inset-0" />
      <form className="bg-zinc-200 z-10 rounded-xl px-6 py-6 max-w-md w-full">
        <h2 className="font-bold text-zinc-700 text-xl tracking-normal mb-4 max-w-3xl">
          Make booking
        </h2>
        <div className="flex gap-3 flex-col mt-8">
          <label htmlFor="name" className="font-semibold text-zinc-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 px-2 py-2 w-full rounded-lg border-zinc-400"
          />
        </div>
        <div className="flex gap-3 flex-col mt-8">
          <label htmlFor="address" className="font-semibold text-zinc-700 ">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="border-2 py-2 w-full rounded-lg border-zinc-400"
          />
        </div>
        <div className="flex gap-3 flex-col mt-8">
          <label htmlFor="phone" className="font-semibold text-zinc-700 ">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="border-2 py-2 w-full rounded-lg border-zinc-400"
          />
        </div>
        <div className="mt-8">
          <p className="font-semibold text-zinc-700 ">Special Instructions</p>
          <div className="flex gap-6">
            <div className="flex gap-6">
              <label className="inline-flex items-center gap-2 text-zinc-700 ">
                Separate wash
              </label>
              <input
                type="checkbox"
                name="separateWash"
                className="h-4 w-4 border-2 rounded border-zinc-400"
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
          <label htmlFor="details" className="font-semibold text-zinc-700 ">
            Additional Information
          </label>
          <textarea
            name="details"
            id="details"
            className="border-2 py-2 w-full rounded-lg border-zinc-400"
          ></textarea>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-sm mt-6 hover:bg-indigo-900">
          Submit
        </button>
      </form>
    </div>
  );
}
