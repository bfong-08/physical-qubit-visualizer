import Link from "next/link";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export default function DocsFooter({
  prev_href,
  next_href,
}: {
  prev_href?: string;
  next_href?: string;
}) {
  return (
    <>
      <hr className="mt-8 mb-2 border-stone-700" />

      <footer
        className={`h-48 w-full flex items-start ${prev_href && next_href ? "justify-between" : prev_href ? "justify-start" : "justify-end"}`}
      >
        {prev_href && (
          <Link
            href={prev_href}
            className="rounded-lg flex items-center gap-2 border px-4 py-2 border-stone-700 text-stone-500 hover:bg-stone-900 transition-all duration-150"
          >
            <IoIosArrowRoundBack className="h-5 w-5" /> Previous
          </Link>
        )}
        {next_href && (
          <Link
            href={next_href}
            className="rounded-lg flex items-center gap-2 border px-4 py-2 border-stone-700 text-stone-500 hover:bg-stone-900 transition-all duration-150"
          >
            Next <IoIosArrowRoundForward className="h-5 w-5" />
          </Link>
        )}
      </footer>
    </>
  );
}
