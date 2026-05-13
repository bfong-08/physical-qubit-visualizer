import Link from "next/link";

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-64 fixed right-8 bg-stone-950 flex-col gap-2">
      <h1 className="font-bold">On this page</h1>
      {children}
    </div>
  );
}

export function SidebarLink({
  href,
  children,
  nested,
}: {
  href: string;
  children: React.ReactNode;
  nested?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-stone-400 hover:text-white px-2 transition-all duration-150 ${nested && "pl-4"}`}
    >
      {children}
    </Link>
  );
}
