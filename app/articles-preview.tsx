// import clsx from "clsx";
// import Link from "next/link";

// import { Montserrat } from "next/font/google";
// import { fetchArticles } from "@/app/lib/articles-data";

// const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

// function ArticlePreview({
//   index,
//   name,
//   description,
//   coveruri,
// }: {
//   index: number;
//   name: string;
//   description: string;
//   coveruri: string | null;
// }) {
//   return (
//     <div className="flex justify-center w-full">
//       <div
//         className={clsx(
//           { "max-w-[60rem]": index === 0 },
//           { "max-w-[40rem]": index > 0 }
//         )}
//       >
//         <Link href={`/post/${name}-${index}`.replace(/\s/g, "-")}>
//           <h3 className={`${montserrat.className} text-xl font-bold`}>
//             {name}
//           </h3>
//         </Link>
//         <p className="text-lg text-gray-700">{description}</p>
//         <img
//           src={coveruri?.toString()}
//           alt="article-cover"
//           className={clsx(
//             "w-full h-[calc(12.5vw+25vh)] lg:min-h-[10rem] fill-none",
//             { "lg:h-[10vw]": index > 0 },
//             { "bg-gray-500": coveruri === undefined }
//           )}
//         />
//       </div>
//     </div>
//   );
// }

export default function ArticlesPreview() {
  // const articles = await fetchArticles();

  return (
    // <div>
    //   <div>
    //     <div className="flex justify-center mb-4">
    //       {articles["Articles"].map(
    //         (article: any, index: number) =>
    //           index === 0 && (
    //             <ArticlePreview
    //               key={`${article.name}-${index}`}
    //               index={index}
    //               name={article.name}
    //               description={article.description}
    //               coveruri={article.coveruri}
    //             />
    //           )
    //       )}
    //     </div>
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
    //       {articles["Articles"].map(
    //         (article: any, index: number) =>
    //           index > 0 && (
    //             <ArticlePreview
    //               key={`${article.name}-${index}`}
    //               index={index}
    //               name={article.name}
    //               description={article.description}
    //               coveruri={article.coveruri}
    //             />
    //           )
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div>TEST</div>
  );
}
