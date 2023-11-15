import clsx from "clsx";

function ArticlePreviewSkeleton({ firstArticle }: { firstArticle: boolean }) {
  return (
    <div className="flex justify-center w-full min-w-[20rem] h-[100vh]">
      <div
        className={clsx(
          { "max-w-[60rem]": firstArticle },
          { "max-w-[40rem]": !firstArticle }
        )}
      >
        <div className="w-20 h-8 mb-2 bg-gray-900 animate-pulse"></div>
        <div className="w-full h-24 mb-2 bg-gray-900 animate-pulse"></div>
        <div
          className={clsx(
            "w-60 h-[calc(12.5vw+25vh)] lg:min-h-[10rem] fill-none bg-gray-900 animate-pulse",
            { "lg:h-[10vw]": firstArticle }
          )}
        ></div>
      </div>
    </div>
  );
}

export function ArticlesPreviewSkeleton() {
  return (
    <div>
      <div className="flex justify-center mb-4">
        <ArticlePreviewSkeleton firstArticle={true} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <ArticlePreviewSkeleton firstArticle={false} />
        <ArticlePreviewSkeleton firstArticle={false} />
        <ArticlePreviewSkeleton firstArticle={false} />
        <ArticlePreviewSkeleton firstArticle={false} />
        <ArticlePreviewSkeleton firstArticle={false} />
        <ArticlePreviewSkeleton firstArticle={false} />
      </div>
    </div>
  );
}
