"use client";

import { Ban } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/constants";

function NotFound() {
  const router = useRouter();

  return (
    <main className="p-side mx-auto flex max-w-7xl flex-col items-center text-balance pb-32 pt-16 text-center sm:pb-20">
      <h1 className="text-red-gradient text-5xl font-bold">
        <Ban className="mx-auto mb-4 size-24 stroke-destructive" />
        <span>Uh oh... 404</span>
      </h1>
      <p className="pb-4 pt-7 text-2xl text-muted-foreground">
        This site doesn&apos;t exist. You&apos;ve might have entered a wrong
        URL, or tried to visit a feature that hasn&apos;t been done yet.
        However, if you think that this shouldn&apos;t occur, please contact us
        at{" "}
        <Link
          className="font-semibold underline underline-offset-2 hover:text-foreground/80 focus-visible:text-foreground/80"
          href={`mailto:${CONTACT_EMAIL}`}
          target="_blank"
        >
          {CONTACT_EMAIL}
        </Link>
      </p>
      <Button
        className="text-lg font-bold"
        size="lg"
        onClick={() => router.back()}
      >
        Go back
      </Button>
    </main>
  );
}

export default NotFound;
