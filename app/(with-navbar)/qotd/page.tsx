"use client";

import { Loader2 } from "lucide-react";
import React from "react";

import PageError from "@/components/PageError";
import QuoteCard from "@/components/quote-card";
import QuoteCardSkeleton from "@/components/quote-card/QuoteCardSkeleton";
import Rotating3DCard from "@/components/Rotating3DCard";
import { MotionDiv, MotionH1 } from "@/components/utils/MotionElements";
import useQotd from "@/hooks/useQotd";
import { fadeIn, scaleInFromCenter } from "@/lib/animations";

function QotdPage() {
  const { data: qotd, isLoading, error } = useQotd();

  if (isLoading)
    return (
      <section className="fixed left-0 top-0 z-0 h-screen w-screen text-center lg:scale-150">
        <h1 className="absolute left-1/2 top-1/3 flex w-full -translate-x-1/2 items-center justify-center gap-2 text-2xl font-medium text-muted-foreground max-sm:-translate-y-8">
          <Loader2 className="size-6 animate-spin" />
          Loading...
        </h1>
        <QuoteCardSkeleton className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:w-5/6" />
      </section>
    );

  if (error)
    return (
      <PageError
        title="The following error occured whilst trying to view the QOTD"
        error={error}
        queryKey={["getQotd"]}
        className="pt-48"
      />
    );

  return (
    <section className="fixed left-0 top-0 z-0 h-screen w-screen text-center lg:scale-150">
      <MotionH1
        className="text-gold-gradient absolute left-1/2 top-1/3 w-full -translate-x-1/2 text-3xl font-extrabold tracking-wide max-sm:-translate-y-8"
        {...fadeIn(1)}
      >
        Quote of the Day
      </MotionH1>

      <Rotating3DCard>
        <MotionDiv {...scaleInFromCenter()} className="max-sm:w-full">
          <QuoteCard
            {...qotd}
            color="hsla(var(--primary),1)"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-shadow-xl border-primary bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#fde04722_0%,#d9b20633_100%)] dark:bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,#fde04788_0%,#d9770644_100%)] max-sm:w-5/6"
          />
        </MotionDiv>
      </Rotating3DCard>
    </section>
  );
}

export default QotdPage;
