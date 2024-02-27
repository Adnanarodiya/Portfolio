import { Caveat } from "next/font/google";
import React from "react";
import { cn } from "../../../utils/cn";
const caveat = Caveat({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className="sticky top-5">
      <div className="navbar bg-base-100 rounded-3xl w-11/12 mx-auto">
        <div className="flex-1">
          <a className={cn("btn btn-ghost text-xl", caveat.className)}>
            Adnan Arodiya
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
