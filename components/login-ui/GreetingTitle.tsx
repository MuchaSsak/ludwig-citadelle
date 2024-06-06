import React from "react";

import { fontHandwritten } from "@/lib/fonts";
import { cn } from "@/lib/utils";

function GreetingTitle() {
  return (
    <h1 className={cn("text-3xl", fontHandwritten.className)}>
      Welcome back
      <br />
      home, <span className="text-orange-gradient font-extrabold">Loża.</span>
    </h1>
  );
}

export default GreetingTitle;
