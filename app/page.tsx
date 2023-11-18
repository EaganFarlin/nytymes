import { Suspense } from "react";
import ArticlesPreview from "@/app/articles-preview";
import { ArticlesPreviewSkeleton } from "@/app/skeletons";
import { fetchArticles } from "@/app/lib/articles-data";
import { notFound } from "next/navigation";

export default async function Home() {
  const articles = await fetchArticles();

  if (!articles) {
    notFound();
  }

  return (
    // <Suspense fallback={<ArticlesPreviewSkeleton />}>
    <ArticlesPreview articles={articles.Articles} ishomepage={true} />
    // </Suspense>
  );
}
