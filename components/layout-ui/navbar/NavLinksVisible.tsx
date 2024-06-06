import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { NAVBAR_LINKS_VISIBLE } from "@/lib/constants";

function NavLinksVisible() {
  return NAVBAR_LINKS_VISIBLE.map((link) => (
    <Link key={link.href} href={link.href} tabIndex={-1}>
      <Button variant="ghost">{link.title}</Button>
    </Link>
  ));
}

export default NavLinksVisible;
