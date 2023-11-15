"use server";

import { randomUUID } from "crypto";

const fs = require("fs");

const articles = {
  Articles: [
    {
      id: randomUUID(),
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua.",
      coveuri: 0,
    },
    {
      id: randomUUID(),
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua.",
      coveuri: 0,
    },
    {
      id: randomUUID(),
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      coveuri: 0,
    },
    {
      id: randomUUID(),
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      coveuri: 0,
    },
    {
      id: randomUUID(),
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      coveuri: 0,
    },
    {
      id: randomUUID(),
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      coveuri: 0,
    },
    {
      id: randomUUID(),
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      coveuri: 0,
    },
  ],
};

export default async function setArticlesData() {
  fs.writeFileSync(
    process.cwd() + "/app/lib/articles.json",
    JSON.stringify(articles)
  );
}
