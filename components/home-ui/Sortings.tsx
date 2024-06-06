"use client";

import { useQueryState } from "nuqs";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEFAULT_QUOTES_SORTING, QUOTES_SORTINGS } from "@/lib/constants";

function Sortings() {
  const [sort, setSort] = useQueryState("sort");

  return (
    <>
      <div className="flex items-center gap-2 pb-2 pt-4 text-sm text-muted-foreground">
        <h5>SORT BY</h5>
        <div className="h-px grow bg-muted-foreground" />
      </div>

      <Select
        onValueChange={(newValue) => setSort(newValue)}
        value={sort ?? DEFAULT_QUOTES_SORTING.value}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="backdrop-blur">
          {QUOTES_SORTINGS.map((sorting) => (
            <SelectItem value={sorting.value} key={sorting.value}>
              {sorting.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}

export default Sortings;
