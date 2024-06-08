import React from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function QuoteCardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-glassmorphism-sm relative flex min-h-32 w-full flex-col justify-between rounded-md px-4 py-2 sm:w-[30rem]",
        className
      )}
    >
      {/* Quote icon */}
      <Skeleton className="absolute left-4 top-2 size-14 rounded-full" />

      {/* Quote content */}
      <div className="mb-6 space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="ml-auto h-5 w-3/5 rounded-full" />
        ))}
      </div>

      <div className="flex items-end justify-between gap-1">
        {/* Badges */}
        <div className="flex gap-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="ml-auto h-5 w-16 rounded-full" />
          ))}
        </div>

        {/* Report button */}
        <Skeleton className="size-6 rounded-full" />
      </div>
    </div>
  );
}

export default QuoteCardSkeleton;
