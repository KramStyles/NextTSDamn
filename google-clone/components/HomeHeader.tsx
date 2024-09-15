import Link from "next/link";
import React from "react";
import SignInOptions from "@/components/SignInOptions";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link
          href="https://mail.google.com"
          className="hover:underline"
          target="_blank"
        >
          Gmail
        </Link>
        <Link
          href="https://image.google.com"
          className="hover:underline"
          target="_blank"
        >
          Images
        </Link>
        <SignInOptions />
      </div>
    </header>
  );
}
