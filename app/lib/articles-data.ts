// import { promises as fs } from "fs";

// export async function fetchArticles() {
//   try {
//     const articlesJSONFile = await fs.readFile(
//       process.cwd() + "/app/lib/articles.json",
//       "utf8"
//     );
//     const articles = JSON.parse(articlesJSONFile);

//     return articles;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch articles.");
//   }
// }

// // export async function fetchInvoiceById(id: string) {
// //   try {
// //     return;
// //   } catch (error) {
// //     console.error("Database Error:", error);
// //     throw new Error("Failed to fetch article.");
// //   }
// // }
