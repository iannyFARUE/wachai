import React from "react";
import laundromat from "@/public/laundry-bg.jpg";
import Image from "next/image";
import { createBooking } from "@/app/actions";
import LaundryPreferrenceGroup from "./LaundryPreferrenceGroup";

export default function Dropoff() {
  return (
    <div className="relative flex min-h-screen  w-full justify-center items-center">
      {/* Background image */}
      <Image
        src={laundromat}
        fill
        alt="Customer dropping off laundry at laundromat"
        className="object-cover"
        priority
      />

      <div className="bg-black/60 absolute inset-0" />
      {/* Card */}
      <form
        action={createBooking}
        className="relative z-10 w-full max-w-lg bg-zinc-950/70 shadow-2xl backdrop-blur-xl border border-white/10 text-zinc-50 rounded-2xl px-6 py-7 "
      >
        {/* <h2 className="font-bold text-zinc-700 text-xl tracking-normal mb-4 max-w-3xl">
          Make booking
        </h2> */}
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
            Drop-off booking
          </p>
          <h2 className="mt-2 text-2xl font-semibold leading-tight">
            Digitize your laundry drop-off
          </h2>
          <p className="mt-1 text-sm text-zinc-300">
            Tell us where to pick up and how you like your clothes handled
          </p>
        </div>

        {/* Customer Details  */}
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400 mb-1">
              Customer Details
            </p>
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-zinc-100"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border px-3 py-2 w-full rounded-lg border-zinc-600 bg-zinc-900/60 text-sm text-zinc-50 placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
                  autoComplete="name"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-zinc-100"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border px-3 py-2 w-full rounded-lg border-zinc-600 bg-zinc-900/60 text-sm text-zinc-50 placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
                  autoComplete="tel"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-zinc-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border px-3 py-2 w-full rounded-lg border-zinc-600 bg-zinc-900/60 text-sm text-zinc-50 placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
                  autoComplete="email"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>
          {/* Address block */}
          <div className="pt-4 border-t border-zinc-800/70 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400 mb-3">
              Address Information
            </p>

            {/* Street + Apartment */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-1.5 md:flex-1">
                <label
                  htmlFor="streetAddress"
                  className="text-sm font-medium text-zinc-100"
                >
                  Street Adress
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  className="border px-3 py-2 w-full rounded-lg border-zinc-600 bg-zinc-900/60 text-sm text-zinc-50 placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
                  autoComplete="address-line1"
                  placeholder="123 Main St"
                />
              </div>
              <div className="flex flex-col gap-1.5 md:flex-1">
                <label
                  htmlFor="apartment"
                  className="text-sm font-medium text-zinc-100"
                >
                  Apartment/Suite(Optional)
                </label>
                <input
                  type="text"
                  id="apartment"
                  name="apartment"
                  className="border px-3 py-2 w-full rounded-lg border-zinc-600 bg-zinc-900/60 text-sm text-zinc-50 placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
                  autoComplete="address-line2"
                  placeholder="Apt-4B"
                />
              </div>
            </div>

            {/* City and State block */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-1.5 md:flex-1">
                <label
                  htmlFor="city"
                  className="text-sm font-medium text-zinc-100"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="border px-3 py-2 w-full rounded-lg border-zinc-600 bg-zinc-900/60 text-sm text-zinc-50 placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
                  autoComplete="address-level2"
                  placeholder="New York"
                />
              </div>
              <div className="flex flex-col gap-1.5 md:flex-1">
                <label
                  htmlFor="state"
                  className="text-sm font-medium text-zinc-100"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="border px-3 py-2 w-full rounded-lg border-zinc-600 bg-zinc-900/60 text-sm text-zinc-50 placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
                  autoComplete="address-level1"
                  placeholder="NY"
                />
              </div>
            </div>

            {/* Zip + Country */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-1.5 md:flex-1">
                <label
                  htmlFor="zipCode"
                  className="text-sm font-medium text-zinc-100"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  className="border px-3 py-2 w-full rounded-lg border-zinc-600 bg-zinc-900/60 text-sm text-zinc-50 placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
                  autoComplete="postal-code"
                  placeholder="10001"
                />
              </div>
              <div className="flex flex-col gap-1.5 md:flex-1">
                <label
                  htmlFor="country"
                  className="text-sm font-medium text-zinc-100"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="border px-3 py-2 w-full rounded-lg border-zinc-600 bg-zinc-900/60 text-sm text-zinc-50 placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
                  autoComplete="country-name"
                  placeholder="United States"
                />
              </div>
            </div>
          </div>
          {/* Preferences */}
          <div className="pt-4 border-t border-zinc-800/70">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400 mb-3">
              Laundry Preferences
            </p>
            <LaundryPreferrenceGroup />
            <div className="mt-4 flex flex-col gap-1.5">
              <label
                htmlFor="additionalInfo"
                className="text-sm font-medium text-zinc-100"
              >
                Additional information
              </label>
              <textarea
                name="additionalInfo"
                id="additionalInfo"
                rows={3}
                className="w-full rounded-lg border border-zinc-600 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-50 placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70"
                placeholder="e.g allergies, detergent preferences, gate code.."
              />
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-6 flex flex-col gap-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center bg-indigo-500 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            Confirm drop-off request
          </button>
          <p className="text-xs text-zinc-400">
            Yo'll get an SMS confirmation once your booking is received
          </p>
        </div>
      </form>
    </div>
  );
}
