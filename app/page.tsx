import { Suspense } from "react";
import ArticlesPreview from "@/app/articles-preview";
import { ArticlesPreviewSkeleton } from "@/app/skeletons";
import { fetchArticles } from "@/app/lib/articles-data";

export default async function Home() {
  const articles = await fetchArticles();

  return (
    // <Suspense fallback={<ArticlesPreviewSkeleton />}>
    <ArticlesPreview articles={articles.Articles} ishomepage={true} />
    // </Suspense>
  );
}
