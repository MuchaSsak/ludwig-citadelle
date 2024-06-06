"use client";

import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NAVBAR_LUDWIG_API_LINKS } from "@/lib/constants";

function LudwigAPINavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-tranparent ring-primary transition-none [&_svg]:transition-transform">
            LudwigAPI
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[25rem] gap-3 bg-popover p-4 backdrop-blur md:w-[31.25rem] md:grid-cols-2 lg:w-[37.5rem]">
              {NAVBAR_LUDWIG_API_LINKS.map(
                ({ title, description, href, Icon }) => (
                  <li key={title}>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none ring-primary transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href={href}
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={20} />
                          <h6 className="text-sm font-medium leading-none">
                            {title}
                          </h6>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {description}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                )
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default LudwigAPINavMenu;
