"use server";

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
            <div className="text-lg">
              <Link href={"/"} className="text-gray-500">
                Posts
              </Link>{" "}
              {">"}{" "}
              <Link href={`/posts/${category}`} className="text-gray-950">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </div>
            <h1 className="text-2xl">{article.name}</h1>
            <p className="text-lg">{article.description}</p>
            <div className="flex flex-col w-full h-[calc(25vw+20vh)]">
              <img
                src={article.coverUri}
                alt="article-cover"
                className="w-full h-[calc(25vw+20vh)] object-cover"
              />
              <Link href={`/posts/${category}/${id}/cover-img`}>
                <FontAwesomeIcon
                  icon={faMaximize}
                  className="relative bottom-[calc(25vw+20vh-1rem)] left-[calc(90vw-3rem)] md:left-[calc(60vw-4.75rem)] w-10 h-10 mr-1 bg-white"
                />
              </Link>
            </div>
            <small>{article.id}</small>
            <p className="text-lg">{article.text}</p>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
