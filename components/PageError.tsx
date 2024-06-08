"use client";

import { useQueryClient } from "@tanstack/react-query";
import { Ban } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function PageError({
  title,
  error,
  queryKey,
  className,
}: {
  title: string;
  error: Error;
  queryKey: string[];
  className?: string;
}) {
  const queryClient = useQueryClient();

  function handleTryAgain() {
    queryClient.invalidateQueries({ queryKey });
  }

  return (
    <section
      className={cn(
        "grid max-w-96 place-items-center text-center mx-auto space-y-2",
        className
      )}
    >
      <Ban className="size-24 text-destructive" />
      <h1 className="text-red-gradient text-3xl font-semibold">{title}</h1>
      <p className="text-lg text-muted-foreground">{error.message}</p>
      <Button onClick={handleTryAgain}>Try again</Button>
    </section>
  );
}

export default PageError;
