import ArticlePreview from "@/app/(ui)/ArticlePreview";
import articles from "@/app/lib/articles";

export default function Home() {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          {articles.Articles.map(
            (article: any, index: number) =>
              index === 0 && (
                <ArticlePreview
                  key={`${article.name}-${index}`}
                  index={index}
                  name={article.name}
                  description={article.description}
                  coveruri={article.coveruri}
                />
              )
          )}
        </div>
        <div className="flex justify-center flex-wrap">
          {articles.Articles.map(
            (article: any, index: number) =>
              index > 0 && (
                <ArticlePreview
                  key={`${article.name}-${index}`}
                  index={index}
                  name={article.name}
                  description={article.description}
                  coveruri={article.coveruri}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
