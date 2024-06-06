"use client";

import { Loader2, LogOut } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useSignOutUser from "@/hooks/useSignOutUser";

function LogOutButton() {
  const { mutate, isPending } = useSignOutUser();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="rounded-full ring-primary">
          <Button
            onClick={() => mutate()}
            disabled={isPending}
            asChild
            variant="destructive"
            size="icon"
            className="rounded-full p-[0.55rem]"
          >
            {isPending ? <Loader2 className="animate-spin" /> : <LogOut />}
          </Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={8}>
          <p>Sign out</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default LogOutButton;
