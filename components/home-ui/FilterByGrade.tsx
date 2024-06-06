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
import { QUOTES_GRADES } from "@/lib/constants";

function FilterByGrade() {
  const [grade, setGrade] = useQueryState("grade");

  return (
    <div className="flex items-center gap-2 pt-2">
      <h6>Grade:</h6>
      <Select
        onValueChange={(newValue) => setGrade(newValue)}
        value={grade ?? undefined}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select grade" />
        </SelectTrigger>
        <SelectContent className="backdrop-blur">
          {QUOTES_GRADES.map((grade) => (
            <SelectItem value={grade} key={grade}>
              {grade}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default FilterByGrade;
