"use client";

import Profile from "./Profile";
import Info from "./Info";
import Link from "next/link";

export default function Navbar() {
  return (
    <div
      className={`fixed z-50 font-gabarito top-0 w-screen flex justify-center items-center h-16 border-b border-stone-800 bg-linear-[170deg] from-stone-900 to-stone-950`}
    >
      <Link href={"/"} className="text-3xl font-bold">
        Qubit State Visualizer
      </Link>
      <Profile />
      <Info />
    </div>
  );
}
