"use server";

import { randomUUID } from "crypto";

const fs = require("fs");

const articles: {
  Articles: [];
} = {
  Articles: [],
};

const exampleArticle = () => {
  return {
    id: randomUUID(),
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua.",
    category: Math.random() >= 0.5 ? "Cats" : "Dogs",
    coveuri: undefined,
  };
};

for (let i = 0; i < 10; i++) {
  articles.Articles.push(exampleArticle());
}

export default async function setArticlesData() {
  fs.writeFileSync(
    process.cwd() + "/app/lib/articles.json",
    JSON.stringify(articles)
  );
}
