"use client";

import { SearchIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import React from "react";

import FilterAndSort from "@/components/home-ui/FilterAndSort";
import { Input } from "@/components/ui/input";

function Search() {
  const [search, setSearch] = useQueryState("search");

  return (
    <div
      className="bg-glassmorphism-sm sticky top-16 z-10 flex w-full items-center rounded-md backdrop-blur sm:w-[30rem] [&:has(>_input:focus-visible)]:outline-none [&:has(>_input:focus-visible)]:ring-2 [&:has(>_input:focus-visible)]:ring-ring [&:has(>_input:focus-visible)]:ring-offset-2"
      tabIndex={-1}
    >
      <label
        htmlFor="search-quotes"
        className="flex h-10 items-center pl-3 text-muted-foreground"
      >
        <SearchIcon className="size-5 stroke-[1.5]" />
      </label>

      <Input
        id="search-quotes"
        className="border-none bg-transparent focus-visible:ring-transparent focus-visible:ring-offset-0"
        placeholder="Search for quotes..."
        value={search ?? ""}
        onChange={(e) =>
          setSearch(e.target.value === "" ? null : e.target.value)
        }
      />

      <FilterAndSort />
    </div>
  );
}

export default Search;
