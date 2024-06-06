"use client";

import { Quote } from "lucide-react";
import React, { forwardRef } from "react";

import Report from "@/components/quote-card/Report";
import Tags from "@/components/quote-card/Tags";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface QuoteCardProps extends QuoteInApp {
  className?: string;
  style?: React.CSSProperties;
  canBeReported?: boolean;
}

const QuoteCard = forwardRef<HTMLDivElement, QuoteCardProps>(
  ({ canBeReported = true, className, style, ...props }, ref) => {
    const { quote, id, grade, tags, color } = props;

    return (
      <div
        className={cn(
          "bg-glassmorphism-sm relative flex min-h-32 w-full flex-col justify-between rounded-md px-4 py-2 sm:w-[30rem]",
          className
        )}
        style={style}
        ref={ref}
      >
        <Quote
          className="absolute left-4 top-2 size-14 stroke-[1.25]"
          color={color}
        />
        <p className="ml-auto w-3/4 pb-6 text-right">{quote}</p>

        <div className="flex items-end justify-between gap-1">
          {/* Badges */}
          <div className="flex flex-wrap gap-1.5">
            <Badge className="animate-pulse-shadow">ID: #{id}</Badge>
            <Badge
              variant="secondary"
              className="bg-background transition-none dark:bg-background/75"
            >
              {grade}
            </Badge>
            {tags && <Tags tags={tags} color={color} />}
          </div>
          {/* Report button */}
          {canBeReported && <Report {...props} />}
        </div>
      </div>
    );
  }
);
QuoteCard.displayName = "QuoteCard";

export default QuoteCard;
