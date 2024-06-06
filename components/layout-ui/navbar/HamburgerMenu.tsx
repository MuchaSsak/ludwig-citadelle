import { Github, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeSwitcher from "@/components/utils/ThemeSwitcher";
import {
  LUDWIG_CITADELLE_GITHUB_LINK,
  NAVBAR_LINKS_HAMBURGER,
} from "@/lib/constants";

function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger className="xl:hidden">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="rounded-full p-1.5"
        >
          <Menu className="stroke-[1.5]" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-background/25 text-background backdrop-blur-[0.5rem] dark:text-foreground">
        <SheetTitle className="font-mono font-light italic text-muted dark:text-muted-foreground">
          Where to, Loża?
        </SheetTitle>

        {/* Navbar links */}
        <SheetHeader>
          <ul className="flex flex-col items-end gap-4 pt-12">
            {NAVBAR_LINKS_HAMBURGER.map(({ href, title, Icon }) => (
              <Link key={href} href={href} tabIndex={-1}>
                <Button
                  variant="link"
                  className="space-x-3 pr-4 text-2xl text-background dark:text-foreground [&:hover_span:last-child]:text-primary"
                  size="lg"
                >
                  <span>{title}</span>
                  <span>
                    <Icon />
                  </span>
                </Button>
              </Link>
            ))}
          </ul>

          {/* Buttom buttons */}
          <ul className="flex items-center justify-end gap-1 pr-2 pt-2">
            <Link
              href={LUDWIG_CITADELLE_GITHUB_LINK}
              tabIndex={-1}
              target="_blank"
            >
              <Button
                variant="ghost"
                size="icon"
                className="size-10 rounded-full"
              >
                <Github className="size-7 stroke-[1.5]" />
              </Button>
            </Link>
            <ThemeSwitcher className="size-10 rounded-full [&_svg]:size-7" />
          </ul>
        </SheetHeader>

        {/* Footer */}
        <SheetFooter>
          <h6 className="absolute bottom-4 right-4 text-sm text-muted dark:text-muted-foreground">
            Copyright 2024&copy; | UI inspired by{" "}
            <Link
              href="https://dub.co"
              target="_blank"
              className="underline-offset-2 outline-none hover:underline focus-visible:underline"
            >
              dub.co
            </Link>
          </h6>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default HamburgerMenu;
