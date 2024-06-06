import { Info } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CONTACT_EMAIL } from "@/lib/constants";

function InfoTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="ml-auto rounded-full ring-primary">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="size-6 rounded-full p-1 text-muted-foreground"
          >
            <Info />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={12} className="max-w-[35ch]">
          <p>
            This application is restricted, because it contains private
            information. Only few selected people should know the password, and
            if you think you&apos;re one of them - please contact us at{" "}
            <Link
              className="font-semibold underline underline-offset-2 hover:text-foreground/80 focus-visible:text-foreground/80"
              href={`mailto:${CONTACT_EMAIL}`}
              target="_blank"
            >
              {CONTACT_EMAIL}
            </Link>
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default InfoTooltip;
