import { notFound } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchArticleByCategoryAndId } from "@/app/lib/articles-data";
import type { Metadata, ResolvingMetadata } from "next";
import CoverImgMaxMinBtn from "../cover-img-max-min-btn";

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
    title: `Cover Image - ${article.name}`,
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
    <div className="fixed top-0 left-0 z-50 w-[100vw] h-full bg-white">
      <img
        src={article.coverUri}
        alt={`cover-uri-for-${article.name.replace(/\s/g, "-")}`}
        className="w-full h-full object-contain"
      />
      <CoverImgMaxMinBtn isMin={true} category={category} id={id} />
    </div>
  );
}
