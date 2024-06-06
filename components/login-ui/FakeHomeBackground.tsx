import React from "react";

import Title from "@/components/home-ui/Title";
import QuoteCardSkeleton from "@/components/quote-card/QuoteCardSkeleton";
import { MAX_QUOTES_PER_PAGE } from "@/lib/constants";

function FakeHomeBackground() {
  return (
    <main className="p-side mx-auto flex max-w-7xl flex-col items-center text-balance pb-32 pt-16 blur-md dark:brightness-50 sm:pb-20">
      <Title />
      {/* Quotes loading skeletons */}
      <div className="space-y-2 pt-3 max-sm:w-full">
        {Array.from({ length: MAX_QUOTES_PER_PAGE }).map((_, i) => (
          <QuoteCardSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}

export default FakeHomeBackground;
