import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href="/"
      className="rounded-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
    >
      <Image
        src="/logo.png"
        alt="Ludwig Citadelle Logo"
        width={200}
        height={0}
        priority
      />
    </Link>
  );
}

export default Logo;
