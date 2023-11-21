import ArticlesPreview from "@/app/articles-preview";
import SetPostsButton from "@/app/posts/set/set-posts-button";
import { notFound } from "next/navigation";

import { promises as fs } from "fs";

export default async function Page() {
  const articlesJSONFile = await fs.readFile(
    process.cwd() + "/app/lib/articles.json",
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
