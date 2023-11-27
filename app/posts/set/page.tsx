import ArticlesPreview from "@/app/articles-preview";
import SetPostsButton from "@/app/posts/set/set-posts-button";
import { notFound } from "next/navigation";

import { promises as fs } from "fs";
import path from "path";

export default async function Page() {
  const articlesJSONFile = await fs.readFile(
    path.resolve() + "/app/lib/articles.json",
    "utf8"
  );

  console.log(process.cwd());

  const articles = JSON.parse(articlesJSONFile);

  if (!articles) {
    notFound();
  }

  return (
    <div>
      <SetPostsButton />
      <ArticlesPreview articles={articles.Articles} ishomepage={true} />
    </div>
  );
}
