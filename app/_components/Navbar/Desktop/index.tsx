import Link from "next/link";
import React from "react";
import { GrTicket } from "react-icons/gr";
import Search from "../../Search";
import ThemeToggle from "../../ThemeToggle";

function Desktop() {
  return (
    <div className="flex h-[58px] w-full items-center justify-between bg-foreground bg-opacity-70 backdrop-blur-md px-6">
      <Link href={"/"} className="h-full">
        <div className="flex items-center gap-2 group h-full hover:bg-primary-theme/5 px-2">
          <GrTicket className="group-hover:text-primary-theme duration-200" />
          <span className="block font-semibold text-sm">CuboTickets</span>
        </div>
      </Link>

      <Search />

      <ThemeToggle />
    </div>
  );
}

export default Desktop;
