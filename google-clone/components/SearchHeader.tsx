/*Template generated by google-clone on Wednesday (9/11/2024), 4:30 AM.
 * Author: Kramstyles (USER)
 * Filename: components/SearchHeader.tsx
 */

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import SearchHeaderOptions from "@/components/SearchHeaderOptions";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href="/">
          <Image
            alt="Google logo"
            src="/google-logo.png"
            width={120}
            height={40}
            priority
            style={{ width: "auto" }}
          />
        </Link>
        <div className="flex-1">
          <Suspense fallback={null}>
            <SearchBox />
          </Suspense>
        </div>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
