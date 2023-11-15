import { Suspense } from "react";
import ArticlesPreview from "@/app/articles-preview";

export default function Home() {
  return (
    <Suspense fallback={<div>Suspense Fallback</div>}>
      <ArticlesPreview />
    </Suspense>
  );
}
