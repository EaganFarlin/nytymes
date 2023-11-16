"use server";

import { randomUUID } from "crypto";

const fs = require("fs");

interface Article {
  id: string;
  category: string;
  coverUri: string;
  name: string;
  description: string;
  text: string;
}

interface ArticlesObject {
  Articles: Article[];
}

const articles: ArticlesObject = {
  Articles: [],
};

async function exampleArticle(): Promise<Article> {
  const category = Math.random() >= 0.5 ? "cats" : "dogs";
  const coverUri =
    category === "cats"
      ? await fetchRandomCatImage()
      : await fetchRandomDogImage();
  return {
    id: randomUUID(),
    category: category,
    coverUri: coverUri,
    name: `${category === "cats" ? "Kittie" : "Doggie"} Ipsum #${Math.floor(
      Math.random() * 101
    )}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua.",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum dolor. Et malesuada fames ac turpis. Sed faucibus turpis in eu. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Donec ac odio tempor orci dapibus ultrices in. Mattis aliquam faucibus purus in. Ornare arcu dui vivamus arcu. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Tristique senectus et netus et. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.\nUt venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Et netus et malesuada fames ac turpis egestas. Faucibus interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi leo urna. Congue nisi vitae suscipit tellus mauris a. Blandit aliquam etiam erat velit scelerisque in dictum. Risus in hendrerit gravida rutrum quisque non. Pulvinar mattis nunc sed blandit. Vestibulum lectus mauris ultrices eros in. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.\nLacus sed turpis tincidunt id aliquet risus feugiat. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Porta nibh venenatis cras sed felis. Porta lorem mollis aliquam ut porttitor. Porta non pulvinar neque laoreet suspendisse. Vestibulum lectus mauris ultrices eros in. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Sit amet porttitor eget dolor morbi. Lobortis elementum nibh tellus molestie. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Metus vulputate eu scelerisque felis imperdiet proin. Sit amet justo donec enim diam vulputate. Vulputate dignissim suspendisse in est ante in nibh. Sed arcu non odio euismod lacinia at quis. Turpis egestas maecenas pharetra convallis posuere morbi leo. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. At urna condimentum mattis pellentesque id nibh tortor id. Fringilla phasellus faucibus scelerisque eleifend donec. Gravida dictum fusce ut placerat orci.\nTurpis massa sed elementum tempus. In massa tempor nec feugiat nisl pretium fusce id. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Urna duis convallis convallis tellus id interdum velit laoreet. Enim lobortis scelerisque fermentum dui faucibus in. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Odio tempor orci dapibus ultrices in. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Scelerisque in dictum non consectetur a erat nam at. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Feugiat nisl pretium fusce id. Accumsan tortor posuere ac ut consequat semper. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Integer quis auctor elit sed vulputate mi sit. Ullamcorper sit amet risus nullam eget. Facilisis magna etiam tempor orci eu lobortis elementum. Adipiscing vitae proin sagittis nisl rhoncus. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.\nDonec ultrices tincidunt arcu non sodales neque. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Enim lobortis scelerisque fermentum dui faucibus. Sit amet purus gravida quis blandit turpis. Sem viverra aliquet eget sit amet tellus cras adipiscing. Ultrices sagittis orci a scelerisque purus semper eget duis at. Ut tristique et egestas quis ipsum suspendisse ultrices. Tempus imperdiet nulla malesuada pellentesque elit eget. Posuere ac ut consequat semper viverra nam libero justo laoreet. Faucibus interdum posuere lorem ipsum dolor sit amet. Gravida dictum fusce ut placerat orci. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Velit euismod in pellentesque massa placerat duis. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Commodo elit at imperdiet dui accumsan sit amet nulla.`,
  };
}

async function fetchRandomDogImage() {
  const timestamp = new Date().getTime();
  const response = await fetch(
    `https://random.dog/woof.json?timestamp=${timestamp}&filter=mp4,webm`
  );
  const data = await response.json();
  return data.url;
}

async function fetchRandomCatImage() {
  const timestamp = new Date().getTime();
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?timestamp=${timestamp}`
  );
  const data = await response.json();
  return data[0].url;
}

export default async function setArticlesData() {
  for (let i = 0; i < 10; i++) {
    articles.Articles.push(await exampleArticle());
  }

  fs.writeFileSync(
    process.cwd() + "/app/lib/articles.json",
    JSON.stringify(articles)
  );

  console.log("Articles data set.");
}
