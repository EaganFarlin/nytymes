import clsx from "clsx";
import Link from "next/link";

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
    coverUri: string;
  };
}) {
  return (
    <div className="flex justify-center w-full">
      <div
        className={clsx(
          { "w-1/2 max-w-[60rem]": index === 0 },
          { "max-w-[40rem]": index > 0 }
        )}
      >
        <Link
          href={`/posts/${article.category}/${article.id}`.replace(/\s/g, "-")}
        >
          <span className="flex flex-col p-4 border-2 border-gray-300 hover:scale-105 hover:border-gray-500 duration-1000 rounded">
            <span className="text-xl font-bold">{article.name}</span>
            <span className="text-lg text-gray-700">{article.description}</span>
            <img
              src={article.coverUri}
              alt="article-cover"
              className={clsx(
                "w-full h-[calc(15vw+15vh)] lg:min-h-[10rem] mt-1 object-cover",
                { "lg:h-[10vw]": index > 0 },
                { "bg-gray-500": article.coverUri === undefined }
              )}
            />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function ArticlesPreview({
  articles,
  ishomepage,
}: {
  articles: any;
  ishomepage: boolean;
}) {
  return (
    <div>
      {ishomepage && (
        <div className="flex justify-center">
          <div className="md:w-4/5">
            <div className="flex justify-center mb-8">
              {articles.map(
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
              {articles.map(
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
      )}
      {!ishomepage && (
        <div className="flex justify-center">
          <div className="md:w-4/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
              {articles.map(
                (article: any, index: number) =>
                  index > 0 && (
                    <ArticlePreview
                      key={`${article.name}-${index}`}
                      index={1}
                      article={article}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
