"use client";

import { Input } from "@/app/_components/ui/input";
import { useSearch } from "@/app/_contexts/SearchContext";
import { usePathname } from "next/navigation";
import React from "react";
import { LuSearch } from "react-icons/lu";

function Search() {
  const { setSearchTerm, searchTerm } = useSearch();
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="relative min-w-[100px] md:min-w-[500px] py-4 group">
      <LuSearch
        size={21}
        className={`absolute left-4 top-1/2 -translate-y-1/2 transform text-muted-foreground group-hover:text-primary-theme duration-200 ${
          searchTerm.length > 0 && "text-primary-theme"
        }`}
      />

      <Input
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder="Pesquisar ticket ou mensagem"
        className="w-full rounded-[24px] py-5 pl-12 text-[15px] font-medium border border-solid border-gray-500"
      />
    </div>
  );
}

export default Search;
