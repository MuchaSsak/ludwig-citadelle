"use client";

import { useQueryState } from "nuqs";
import React from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { QUOTES_TAGS } from "@/lib/constants";
import { splitStringByCapitalization } from "@/lib/utils";

function FilterByTags() {
  const [tags, setTags] = useQueryState("tags");

  return (
    <>
      <h6>Included tags:</h6>
      <ToggleGroup
        type="multiple"
        className="flex flex-wrap justify-start py-2"
      >
        {QUOTES_TAGS.map((tag) => (
          <ToggleGroupItem
            variant="outline"
            className={
              tags?.includes(tag) ? "!bg-primary dark:text-background" : ""
            }
            key={tag}
            value={tag}
            aria-label={`Toggle ${tag}`}
            data-state={tags?.includes(tag) ? "on" : "off"}
            onClick={() =>
              setTags((cur) => {
                // Add the first tag
                if (!cur) return tag;
                // Remove all tags
                if (
                  cur.includes(tag) &&
                  splitStringByCapitalization(cur).length === 1
                )
                  return null;
                // Remove the tag
                if (cur.includes(tag)) return cur.replace(tag, "");
                // Add another tag
                else return cur + tag;
              })
            }
          >
            {tag}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </>
  );
}

export default FilterByTags;
