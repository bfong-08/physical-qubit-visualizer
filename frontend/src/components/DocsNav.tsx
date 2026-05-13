"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DocsNav({}) {
  const pathname = usePathname();

  return (
    <div className="fixed flex flex-col px-8 pt-12 z-30 bg-stone-950 left-0 w-64 h-full border-r border-stone-700">
      <h1 className="text-2xl font-bold mb-2">Documentation</h1>
      <DocsLink href="/docs" pathname={pathname}>
        The Qubit
      </DocsLink>
      <DocsLink href="/docs/gates" pathname={pathname}>
        Quantum Gates
      </DocsLink>
      <DocsLink href="/docs/bloch-sphere" pathname={pathname}>
        The Bloch Sphere
      </DocsLink>
    </div>
  );
}

function DocsLink({
  href,
  pathname,
  children,
}: {
  href: string;
  pathname: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={` font-gabarito transition-all duration-150 w-full rounded-sm 
        py-2 px-4 ${pathname == href ? "text-blue-400" : "text-stone-400 hover:text-white"}`}
    >
      {children}
    </Link>
  );
}
