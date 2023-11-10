import { randomUUID } from "crypto";

const fs = require("fs");
// Articles Database

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

let myObj = JSON.stringify(articles);
myObj = JSON.parse(myObj);

export default myObj;
