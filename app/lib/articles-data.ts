import { promises as fs } from "fs";

export async function fetchArticles() {
  try {
    const articlesJSONFile = await fs.readFile(
      process.cwd() + "/app/lib/articles.json",
      "utf8"
    );

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const articles = JSON.parse(articlesJSONFile);

    return articles;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch articles.");
  }
}

export async function fetchArticleById(id: string) {
  try {
    const articles = (await fetchArticles()).Articles;

    const article = articles.find((article: { id: string }) => {
      return article.id === id;
    });

    return article;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch article.");
  }
}
