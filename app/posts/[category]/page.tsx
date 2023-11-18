import { Suspense } from "react";
import { notFound } from "next/navigation";
import { fetchArticles, fetchCategoryArticles } from "@/app/lib/articles-data";
import ArticlesPreview from "@/app/articles-preview";
// import type { Metadata, ResolvingMetadata } from "next";

// type Props = {
//   params: { category: string };
// };

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const category = params.category;

// if (!article) {
//   notFound();
// }

//   return {
//     title: category.charAt(0).toUpperCase() + category.slice(1),
//   };
// }

export default async function Page() {
  // { params }: Props
  // const category = params.category;
  // const catergoryArticles = await fetchCategoryArticles(category);
  // const catergoryArticles = await fetchArticles();

  // if (!catergoryArticles) {
  //   notFound();
  // }

  // return (
  //   <div>
  //     <Suspense fallback={<div>TEST</div>}>
  //       <ArticlesPreview
  //         articles={catergoryArticles.Articles}
  //         ishomepage={false}
  //       />
  //     </Suspense>
  //   </div>
  // );

  const articles = await fetchArticles();

  return (
    // <Suspense fallback={<ArticlesPreviewSkeleton />}>
    <ArticlesPreview articles={articles.Articles} ishomepage={true} />
    // </Suspense>
  );
}
