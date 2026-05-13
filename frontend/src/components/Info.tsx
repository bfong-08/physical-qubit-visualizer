"use client";

import { LuInfo } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Info() {
  const pathname = usePathname();

  return (
    <>
      <Link
        className="fixed top-2 right-2 h-12 border rounded-md 
        flex items-center pl-3 pr-4 py-3 hover:brightness-110
        gray transition-all duration-200 overflow-hidden gap-2
        group"
        href={pathname.includes("/docs") ? "/" : "/docs"}
      >
        <LuInfo className="h-full w-fit aspect-square" />
        {pathname.includes("/docs")
          ? "Return to the Visualizer"
          : "Click Here to Learn More"}
      </Link>
    </>
  );
}
