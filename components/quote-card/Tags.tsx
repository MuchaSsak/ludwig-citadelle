import { TooltipPortal } from "@radix-ui/react-tooltip";
import { Ellipsis } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Tags({ tags, color }: { tags: string[]; color: string }) {
  return (
    <>
      {/* Display first 2 tags normally */}
      {tags.slice(0, 2).map((tag) => (
        <Badge
          key={tag}
          style={{ borderColor: color, color }}
          className="bg-background transition-none dark:bg-background/75"
          variant="outline"
        >
          #{tag}
        </Badge>
      ))}
      {/* Hide more tags in a tooltip */}
      {tags.length > 2 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-6 rounded-full"
              >
                <Ellipsis size={10} />
              </Button>
            </TooltipTrigger>

            <TooltipPortal>
              <TooltipContent
                side="bottom"
                className="flex max-w-72 flex-wrap gap-1.5 bg-background/75 backdrop-blur-[2px]"
              >
                {tags.slice(2).map((tag) => (
                  <Badge
                    key={tag}
                    style={{ borderColor: color, color }}
                    className="bg-background transition-none dark:bg-background/75"
                    variant="outline"
                  >
                    #{tag}
                  </Badge>
                ))}
              </TooltipContent>
            </TooltipPortal>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
}

export default Tags;
