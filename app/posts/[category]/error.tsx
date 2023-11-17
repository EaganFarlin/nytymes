"use client";

import Link from "next/link";

export default function Error({ error }: { error: { message: string } }) {
  return (
    <div className="flex justify-center flex-col text-center">
      <p className="mb-2 text-3xl">ERROR:</p>
      <Link
        href="/"
        className="text-xl border-2 border-gray-500 p-2 rounded-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
}
