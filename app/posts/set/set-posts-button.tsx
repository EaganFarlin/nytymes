"use client";

import setArticlesData from "@/app/lib/set-articles-data";

export default function SetPostsButton() {
  return (
    <button
      onClick={() => {
        setArticlesData();
      }}
      className="rounded p-2 bg-gray-200"
    >
      Set articles data
    </button>
  );
}
