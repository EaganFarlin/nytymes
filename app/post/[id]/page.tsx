import { Suspense } from "react";
import { notFound } from "next/navigation";
import { fetchArticleById } from "@/app/lib/articles-data";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  //   searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  //   const product = await fetch(`https://.../${id}`).then((res) => res.json());
  const article = await fetchArticleById(id);

  return {
    title: article.name,
  };
}

export default async function Page({ params }: Props) {
  const id = params.id;
  const article = await fetchArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <Suspense fallback={<div>TEST</div>}>
        <div>
          <p className="text-lg text-gray-500">
            Post {">"} {article.category}
          </p>
          <h1 className="text-xl">{article.name}</h1>
          <small>{article.id}</small>
          <p>{article.description}</p>
          {/* <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      /> */}
        </div>
      </Suspense>
    </div>
  );
}
