import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

import HamburgerMenu from "@/components/layout-ui/navbar/HamburgerMenu";
import LogOutButton from "@/components/layout-ui/navbar/LogOutButton";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/utils/ThemeSwitcher";
import { LUDWIG_CITADELLE_GITHUB_LINK } from "@/lib/constants";

function RightSideButtons() {
  return (
    <div className="flex items-center gap-1">
      {/* Github project link */}
      <Link
        href={LUDWIG_CITADELLE_GITHUB_LINK}
        tabIndex={-1}
        target="_blank"
        className="max-sm:hidden"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full p-[0.55rem]"
        >
          <Github className="stroke-[1.5]" />
        </Button>
      </Link>

      <ThemeSwitcher className="rounded-full max-sm:hidden" />
      <HamburgerMenu />
      <LogOutButton />
    </div>
  );
}

export default RightSideButtons;
