"use client";

import { PopoverClose } from "@radix-ui/react-popover";
import { Filter } from "lucide-react";
import { useQueryState } from "nuqs";
import React from "react";

import Filters from "@/components/home-ui/Filters";
import Sortings from "@/components/home-ui/Sortings";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function FilterAndSort() {
  const [sort, setSort] = useQueryState("sort");
  const [tags, setTags] = useQueryState("tags");
  const [grade, setGrade] = useQueryState("grade");

  const isAnyRuleApplied = !!(sort || tags || grade);
  const optionsSetterFunctions = [setSort, setTags, setGrade];

  function handleClear() {
    optionsSetterFunctions.map((fn) => fn(null));
  }

  return (
    <Popover>
      <PopoverTrigger className="rounded-md ring-primary [&[data-state=open]_svg]:fill-muted-foreground">
        <Filter className="mx-3 my-2 size-5 stroke-[1.75] text-muted-foreground" />
        {/* Ping indicator */}
        {isAnyRuleApplied && (
          <div className="absolute right-2 top-1.5">
            <div className="relative flex size-2">
              <div className="absolute inline-flex size-full animate-ping rounded-full bg-primary/75 opacity-75" />
              <div className="relative inline-flex size-2 rounded-full bg-primary" />
            </div>
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="backdrop-blur" sideOffset={20}>
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Refine results</h3>
          <PopoverClose>
            <Button variant="destructive" size="sm" onClick={handleClear}>
              Clear
            </Button>
          </PopoverClose>
        </div>
        <Filters />
        <Sortings />
      </PopoverContent>
    </Popover>
  );
}

export default FilterAndSort;
