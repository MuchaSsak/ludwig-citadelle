import { TooltipPortal } from "@radix-ui/react-tooltip";
import { Flag } from "lucide-react";
import React, { useState } from "react";

import ReportDialogContent from "@/components/quote-card/ReportDialogContent";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Report(props: QuoteInApp) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
      {/* Report button */}
      <DialogTrigger tabIndex={-1}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="destructive"
                size="icon"
                className="size-6 rounded-full p-1.5"
              >
                <Flag className="stroke-[3]" />
              </Button>
            </TooltipTrigger>
            <TooltipPortal>
              <TooltipContent
                side="bottom"
                className="flex max-w-72 flex-wrap gap-1.5"
              >
                <p>Report quote</p>
              </TooltipContent>
            </TooltipPortal>
          </Tooltip>
        </TooltipProvider>
      </DialogTrigger>

      {/* Report dialog */}
      <DialogContent className="bg-glassmorphism-md bg-background/90 md:max-w-[50rem]">
        <ReportDialogContent
          quote={{ ...props }}
          setIsOpenDialog={setIsOpenDialog}
        />
      </DialogContent>
    </Dialog>
  );
}

export default Report;
