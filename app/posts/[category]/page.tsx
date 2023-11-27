import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchCategoryArticles } from "@/app/lib/articles-data";
import ArticlesPreview from "@/app/articles-preview";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { category: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const category = params.category;

  return {
    title: category.charAt(0).toUpperCase() + category.slice(1),
  };
}

export default async function Page({ params }: Props) {
  const category = params.category;
  const catergoryArticles = await fetchCategoryArticles(category);

  if (!catergoryArticles) {
    notFound();
  }

  return (
    <div>
      <Suspense fallback={<div>TEST</div>}>
        <ArticlesPreview articles={catergoryArticles} ishomepage={false} />
      </Suspense>
    </div>
  );
}
