import { SearchX } from "lucide-react";
import Link from "next/link";
import React from "react";

import { CONTACT_EMAIL } from "@/lib/constants";

function QuotesNotFound() {
  return (
    <div className="flex max-w-[25rem] flex-col items-center text-pretty py-6 text-center">
      <SearchX className="size-24 stroke-[1.5] text-destructive" />
      <h2 className="pb-4 pt-1 text-2xl font-medium text-destructive">
        Oops, no quotes found...
      </h2>
      <p className="text-lg text-muted-foreground">
        This typically occurs when you search for quotes that don&apos;t exist.
        However, if this issue persists, please contact us at{" "}
        <Link
          className="font-semibold underline underline-offset-2 hover:text-foreground/80 focus-visible:text-foreground/80"
          href={`mailto:${CONTACT_EMAIL}`}
          target="_blank"
        >
          {CONTACT_EMAIL}
        </Link>
      </p>
    </div>
  );
}

export default QuotesNotFound;
