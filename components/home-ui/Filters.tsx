import React from "react";

import FilterByGrade from "@/components/home-ui/FilterByGrade";
import FilterByTags from "@/components/home-ui/FilterByTags";

function Filters() {
  return (
    <>
      <div className="flex items-center gap-2 py-2 text-sm text-muted-foreground">
        <h5>FILTER BY</h5>
        <div className="h-px grow bg-muted-foreground" />
      </div>
      <FilterByTags />
      <FilterByGrade />
    </>
  );
}

export default Filters;
