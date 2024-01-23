import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { fetchArticleByCategoryAndId } from "@/app/lib/articles-data";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { category: string; id: string };
  //   searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const category = params.category;
  const id = params.id;
  const article = await fetchArticleByCategoryAndId(category, id);

  if (!article) {
    notFound();
  }

  return {
    title: article.name,
  };
}

export default async function Page({ params }: Props) {
  const category = params.category;
  const id = params.id;
  const article = await fetchArticleByCategoryAndId(category, id);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <Suspense fallback={<div>TEST</div>}>
        <div className="flex justify-center w-full">
          <div className="w-full md:w-3/5">
            <div className="mb-4 text-xl">
              <Link href={"/"}>Posts</Link> {">"}{" "}
              <Link href={`/posts/${category}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </div>
            <h1 className="text-3xl">{article.name}</h1>
            <p className="mb-4 text-xl text-gray-600">{article.description}</p>
            <div className="flex flex-col w-full">
              <Link
                className="w-0 h-0 relative self-end top-4 right-14"
                href={`/posts/${category}/${id}/cover-img`}
              >
                <FontAwesomeIcon
                  icon={faMaximize}
                  className="w-10 h-10 bg-white"
                />
              </Link>
              <img
                src={article.coverUri}
                alt="article-cover"
                className="w-full h-[calc(25vw+20vh)] object-cover"
              />
              <small>{article.id}</small>
            </div>
            {article.textParagraphs.map((paragraph: String, index: number) => (
              <p key={`paragraph-${index}`} className="my-8 text-xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
