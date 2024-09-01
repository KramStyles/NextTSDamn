/*Template generated by NextTSDamn on Sunday (9/1/2024), 11:09 AM.
 * Author: Kramstyles (USER)
 * Filename: next-ts-tutorial/app/error.tsx
 */
"use client";

import React, { useEffect } from "react";

interface ErrorProps {
  error: any;
  reset: () => void;
}

const error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again (later).</h1>
        <pre>{error.message}</pre>
      <button className="bg-gray-500 hover:text-amber-500 font-bold py-2 px-4 rounded-full" onClick={() => reset()}>
        Try Again.
      </button>
    </div>
  );
};

export default error;
