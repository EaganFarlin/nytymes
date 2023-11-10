// import { randomUUID } from "crypto";

// const fs = require("fs");
// // Articles Database

// const articles = {
//   Articles: [
//     {
//       id: randomUUID(),
//       name: "Lorem Ipsum",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua.",
//       coveuri: 0,
//     },
//     {
//       id: randomUUID(),
//       name: "Lorem Ipsum",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua.",
//       coveuri: 0,
//     },
//     {
//       id: randomUUID(),
//       name: "Lorem Ipsum",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       coveuri: 0,
//     },
//     {
//       id: randomUUID(),
//       name: "Lorem Ipsum",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       coveuri: 0,
//     },
//     {
//       id: randomUUID(),
//       name: "Lorem Ipsum",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       coveuri: 0,
//     },
//     {
//       id: randomUUID(),
//       name: "Lorem Ipsum",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       coveuri: 0,
//     },
//     {
//       id: randomUUID(),
//       name: "Lorem Ipsum",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       coveuri: 0,
//     },
//   ],
// };

// const data = require("./articles.json");

// data.push(articles);

// fs.writeFile("users.json", JSON.stringify(data), (err) => {
//   if (err) throw err;
// });

// // let myObj = JSON.stringify(articles);
// // myObj = JSON.parse(myObj);

// // let myObj = require("@/app/lib/articles.json");
// // myObj = JSON.parse(myObj);

// // let myObj = require("./articles.json")

// export default myObj;

let articles = require("@/app/lib/articles.json");
// articles = JSON.parse(articles);

export default articles;
