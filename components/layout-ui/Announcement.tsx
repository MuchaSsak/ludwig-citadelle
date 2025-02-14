"use client";

import { getCookie, setCookie } from "cookies-next";
import { X } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useAnnouncement from "@/hooks/useAnnouncement";
import { MAX_HIDE_ANNOUNCEMENT_COOKIE_AGE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

function Announcement() {
  const [isHidden, setIsHidden] = useState(() => {
    return !!getCookie("hide-announcement") ?? false;
  });
  const { data } = useAnnouncement();

  if (!data || isHidden) return null;

  const {
    created_at: createdAt,
    preview_title: previewTitle,
    description,
    announcer,
  } = data;

  function handleHideAnnouncement() {
    setCookie("hide-announcement", true, {
      maxAge: MAX_HIDE_ANNOUNCEMENT_COOKIE_AGE,
    });
    setIsHidden(true);
  }

  return (
    <div className="bg-glassmorphism-md p-side relative z-10 flex h-9 items-center justify-between text-sm">
      <div />

      <Dialog>
        <DialogTrigger tabIndex={-1} className="flex items-center">
          <h3
            className="line-clamp-1 rounded-sm text-accent-foreground ring-primary hover:text-foreground focus-visible:text-foreground"
            tabIndex={0}
          >
            {previewTitle}
          </h3>
          <Button size="sm" variant="link" className="h-6">
            Expand here
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-glassmorphism-md bg-background/75 backdrop-blur">
          <DialogHeader>
            <DialogTitle>{previewTitle}</DialogTitle>
            <DialogDescription className="pb-4 pt-2">
              {description}
            </DialogDescription>
            <DialogFooter className="flex items-center !justify-between">
              <span className="text-sm text-muted-foreground dark:text-muted">
                {formatDate(new Date(createdAt))}
              </span>
              <span className="text-orange-gradient text-md font-semibold italic">
                - {announcer}
              </span>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Button
        variant="ghost"
        size="icon"
        className="size-6 p-1"
        onClick={handleHideAnnouncement}
      >
        <X />
      </Button>
    </div>
  );
}

export default Announcement;
