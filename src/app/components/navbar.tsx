import { Caveat } from "next/font/google";
import React from "react";
import { cn } from "@/utils/cn";
import { Menu } from "lucide-react";
import Link from "next/link";
const caveat = Caveat({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className="sticky top-5 z-50">
      <div className="navbar bg-base-100 rounded-3xl w-11/12 mx-auto">
        <div className="flex-1">
          <a href="/" className={cn("btn btn-ghost text-xl", caveat.className)}>
            Adnan Arodiya
          </a>
        </div>
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
            <Menu />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <Link href="/project">Projects</Link>
            </li>
            <li></li>
            <li>
              <a>Resume</a>
            </li>
          </ul>
        </div>
        <div className="flex-none hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/project">Projects</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
