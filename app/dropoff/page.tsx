import React from "react";
import laundromat from "@/public/laundry-bg.jpg";
import Image from "next/image";

export default function Dropoff() {
  return (
    <div className="w-full min-h-screen relative">
      <Image src={laundromat} fill alt="Landromat" />
    </div>
  );
}
