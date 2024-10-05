import Link from "next/link";
import React from "react";
import { GrTicket } from "react-icons/gr";
import Search from "../../Search";

function Mobile() {
  return (
    <div className="flex h-[58px] items-center justify-between px-4 gap-4">
      <Link href={"/"} className="h-full">
        <div className="flex items-center gap-2 group h-full hover:bg-primary-theme/5 px-2">
          <GrTicket className="group-hover:text-primary-theme duration-200" size={25} />
        </div>
      </Link>

      <Search />
    </div>
  );
}

export default Mobile;
