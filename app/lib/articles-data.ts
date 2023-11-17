import { promises as fs } from "fs";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchCategoryArticles(category: string) {
  try {
    const categoryArticles = (await fetchArticles()).Articles.filter(
      (article: { category: string }) => {
        return article.category === category;
      }
    );

    return categoryArticles;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch categrory.");
  }
}

export async function fetchArticles() {
  noStore();

  try {
    const articlesJSONFile = await fs.readFile(
      process.cwd() + "/app/lib/articles.json",
      "utf8"
    );

    const articles = JSON.parse(articlesJSONFile);

    return articles;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch articles.");
  }
}

export async function fetchArticleByCategoryAndId(
  category: string,
  id: string
) {
  try {
    const articles = (await fetchArticles()).Articles;
    const article = articles.find(
      (article: { id: string; category: string }) => {
        return article.id === id && article.category === category;
      }
    );

    return article;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch article.");
  }
}
