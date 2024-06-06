import React from "react";

function Title() {
  return (
    <>
      <h1 className="text-center text-[2.5rem] font-extrabold leading-[1.15] sm:text-6xl">
        <span>Quotes taken out of context</span>
        <br />
        <span className="text-orange-gradient">only with Ludwig Citadelle</span>
      </h1>
      <p className="mx-auto max-w-2xl py-5 text-center text-muted-foreground sm:text-xl">
        Ludwig Citadelle is a place where you can view Mrs. Ludwig&apos;s best
        quotes taken out of context. Collected over the course of a few years by
        a couple of amused friends.
      </p>
    </>
  );
}

export default Title;
