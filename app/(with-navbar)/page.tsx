import React, { Suspense } from "react";

import Quotes from "@/components/home-ui/Quotes";
import ScrollToTop from "@/components/home-ui/ScrollToTop";
import Search from "@/components/home-ui/Search";
import Title from "@/components/home-ui/Title";

function Home() {
  return (
    <main className="p-side mx-auto flex max-w-7xl flex-col items-center text-balance pb-32 pt-16 sm:pb-20">
      <Suspense>
        <Title />
        <Search />
        <Quotes />
        <ScrollToTop />
      </Suspense>
    </main>
  );
}

export default Home;
