"use client";

import { Loader2, Moon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

function ThemeSwitcher({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, [resolvedTheme]);

  if (!isMounted)
    return (
      <Button variant="ghost" size="icon" className={className}>
        <Loader2 className="size-6 animate-spin" />
      </Button>
    );

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunMoon className="stroke-[1.5]" />
      ) : (
        <Moon className="stroke-[1.5]" />
      )}
    </Button>
  );
}

export default ThemeSwitcher;
