import { Suspense } from "react";
import { notFound } from "next/navigation";
import { fetchArticleById } from "@/app/lib/articles-data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const article = await fetchArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <Suspense fallback={<div>TEST</div>}>
        <div>
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
