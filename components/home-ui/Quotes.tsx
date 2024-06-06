"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useQueryState } from "nuqs";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import QuotesNotFound from "@/components/home-ui/QuotesNotFound";
import QuoteCard from "@/components/quote-card";
import QuoteCardSkeleton from "@/components/quote-card/QuoteCardSkeleton";
import { MotionDiv } from "@/components/utils/MotionElements";
import useQuotes from "@/hooks/useQuotes";
import { slideInFromBottom } from "@/lib/animations";
import { MAX_QUOTES_PER_PAGE, QUOTE_CARD_COLORS } from "@/lib/constants";

function Quotes() {
  const { ref, inView } = useInView();
  const queryClient = useQueryClient();
  const [search] = useQueryState("search");
  const [sort] = useQueryState("sort");
  const [tags] = useQueryState("tags");
  const [grade] = useQueryState("grade");

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetching,
    isRefetching,
    isFetchingNextPage,
  } = useQuotes();
  const quotes = data?.pages.flat();

  useEffect(() => {
    // Fetch more pages on scroll
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  useEffect(() => {
    // Refetch results on new search query, filters or sorting
    queryClient.invalidateQueries({ queryKey: ["quotes"] });
  }, [search, sort, tags, grade, queryClient]);

  // All you can see are loading skeletons when: loading for the first time, searching, filtering or sorting.
  // However, not when you are fetching next page in the infinite scroll
  if ((isLoading || isRefetching) && !isFetchingNextPage)
    return (
      <div className="space-y-2 pt-3 max-sm:w-full">
        {Array.from({ length: MAX_QUOTES_PER_PAGE }).map((_, i) => (
          <QuoteCardSkeleton key={i} />
        ))}
      </div>
    );
  if (isError || quotes?.length === 0 || !quotes) return <QuotesNotFound />;

  return (
    <div className="space-y-2 pt-3 max-sm:w-full">
      {/* Quote cards */}
      {quotes!.map((quote, i) => (
        // Animate the first 10 quote cards
        <MotionDiv
          key={i}
          {...slideInFromBottom(0.1 * i)}
          initial={
            i < MAX_QUOTES_PER_PAGE
              ? slideInFromBottom(0.1 * i).initial
              : undefined
          }
        >
          <QuoteCard
            {...quote}
            color={QUOTE_CARD_COLORS[i % QUOTE_CARD_COLORS.length]}
            // Attach intersection observer on the 2nd last card for infinite scrolling
            ref={
              i % MAX_QUOTES_PER_PAGE === MAX_QUOTES_PER_PAGE - 2
                ? ref
                : undefined
            }
          />
        </MotionDiv>
      ))}

      {/* Additional loading skeletons on scroll (fetching next page) */}
      {isFetching &&
        Array.from({ length: MAX_QUOTES_PER_PAGE }).map((_, i) => (
          <QuoteCardSkeleton key={i} />
        ))}
    </div>
  );
}

export default Quotes;
