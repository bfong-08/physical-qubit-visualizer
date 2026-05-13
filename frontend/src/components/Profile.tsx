import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMailOutline, IoCaretDown } from "react-icons/io5";

export default function Profile() {
  return (
    <div
      className="fixed top-2 left-2 h-12 border rounded-md 
        flex items-center pl-4 pr-3 hover:h-22
        gray transition-all duration-200 overflow-hidden flex-col
        group"
    >
      <div className="flex items-center gap-2 h-12 flex-none ">
        <span className="cursor-default">Built by Brandon Fong</span>
        <IoCaretDown className="group-hover:rotate-180 transition-all duration-200" />
      </div>
      <div className="flex gap-4 pb-2 pr-2">
        <a
          href={"https://bfong-portfolio.vercel.app/"}
          className="h-6 flex items-center gap-2"
          target="_blank"
        >
          <FaRegUserCircle className="w-full h-full" /> Portfolio
        </a>
        <a
          href={"mailto:branfong21@gmail.com"}
          className="h-6 flex items-center gap-1"
        >
          <IoMailOutline className="w-full h-full" /> Email
        </a>
      </div>
    </div>
  );
}
