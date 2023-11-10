import ArticlePreview from "@/app/(ui)/ArticlePreview";
const myObj = require("@/app/lib/articles");

export default function Home() {
  return (
    <div className="bg-white">
      <div className="flex justify-center">
        {myObj.Articles.map(
          (item: string) => console.log(item)
          // <ArticlePreview
          //   key={article.id.toString()}
          //   index={index}
          //   name={article.name}
          //   description={article.description}
          //   coveruri={""}
          // />
        )}
      </div>
    </div>
  );
}
