import { Suspense } from "react";
import ArticlesPreview from "@/app/articles-preview";
import { ArticlesPreviewSkeleton } from "@/app/skeletons";

export default function Home() {
  return (
    // <Suspense fallback={<ArticlesPreviewSkeleton />}>
    <ArticlesPreview />
    // </Suspense>
  );
}
