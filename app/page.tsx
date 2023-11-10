import ArticlePreview from "@/app/(ui)/ArticlePreview";
import myObj from "@/app/lib/articles";

export default function Home() {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          {myObj.Articles.map(
            (article: object, index: number) =>
              index === 0 && (
                <ArticlePreview
                  key={article.id.toString()}
                  index={index}
                  name={article.name}
                  description={article.description}
                  coveruri={article.coveruri}
                />
              )
          )}
        </div>
        <div className="flex justify-center flex-wrap">
          {myObj.Articles.map(
            (article: object, index: number) =>
              index > 0 && (
                <ArticlePreview
                  key={article.id.toString()}
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
