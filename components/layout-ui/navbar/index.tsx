import React from "react";

import Logo from "@/components/layout-ui/navbar/Logo";
import LudwigAPINavMenu from "@/components/layout-ui/navbar/LudwigAPINavMenu";
import NavLinksVisible from "@/components/layout-ui/navbar/NavLinksVisible";
import RightSideButtons from "@/components/layout-ui/navbar/RightSideButtons";

function NavBar() {
  return (
    <nav className="p-side sticky top-0 flex h-12 items-center justify-between bg-gradient-to-b from-background to-transparent py-8">
      {/* Left side */}
      <div className="flex items-center gap-16">
        <Logo />
        <div className="flex items-center max-xl:hidden">
          <LudwigAPINavMenu />
          <NavLinksVisible />
        </div>
      </div>

      {/* Right side */}
      <RightSideButtons />
    </nav>
  );
}

export default NavBar;
