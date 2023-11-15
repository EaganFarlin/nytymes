import clsx from "clsx";
import Link from "next/link";

import { fetchArticles } from "@/app/lib/articles-data";

function ArticlePreview({
  index,
  article,
}: {
  index: number;
  article: {
    id: string;
    name: string;
    description: string;
    category: string;
    coveruri: string;
  };
}) {
  return (
    <div className="flex justify-center w-full">
      <div
        className={clsx(
          { "max-w-[60rem]": index === 0 },
          { "max-w-[40rem]": index > 0 }
        )}
      >
        <Link
          href={`/post/${article.category.toLowerCase()}/${article.id}`.replace(
            /\s/g,
            "-"
          )}
        >
          <h3 className="text-xl font-bold">{article.name}</h3>
        </Link>
        <p className="text-lg text-gray-700">{article.description}</p>
        <img
          src={article.coveruri?.toString()}
          alt="article-cover"
          className={clsx(
            "w-full h-[calc(12.5vw+25vh)] lg:min-h-[10rem] fill-none",
            { "lg:h-[10vw]": index > 0 },
            { "bg-gray-500": article.coveruri === undefined }
          )}
        />
      </div>
    </div>
  );
}

export default async function ArticlesPreview() {
  const articles = await fetchArticles();

  return (
    <div>
      <div>
        <div className="flex justify-center mb-4">
          {articles["Articles"].map(
            (article: any, index: number) =>
              index === 0 && (
                <ArticlePreview
                  key={`${article.name}-${index}`}
                  index={index}
                  article={article}
                />
              )
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {articles["Articles"].map(
            (article: any, index: number) =>
              index > 0 && (
                <ArticlePreview
                  key={`${article.name}-${index}`}
                  index={index}
                  article={article}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
