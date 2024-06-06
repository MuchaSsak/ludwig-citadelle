"use client";

import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

function ScrollToTop() {
  const [isAtTop, setIsAtTop] = useState(() => window.scrollY === 0);

  useEffect(() => {
    function scrollFunction() {
      if (window.scrollY === 0) setIsAtTop(true);
      else setIsAtTop(false);
    }

    window.addEventListener("scroll", () => scrollFunction());
    return window.removeEventListener("scroll", () => scrollFunction());
  }, [isAtTop]);

  return (
    <Button
      className={`m-side fixed bottom-4 right-0 size-8 rounded-full p-1.5 transition-opacity ${
        isAtTop ? "opacity-0" : "opacity-100"
      }`}
      tabIndex={1}
      size="icon"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <ArrowUp />
    </Button>
  );
}

export default ScrollToTop;
