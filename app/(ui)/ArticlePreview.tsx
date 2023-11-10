import clsx from "clsx";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function ArticlePreview({
  index,
  name,
  description,
  coveruri,
}: {
  index: number;
  name: string;
  description: string;
  coveruri: string;
}) {
  return (
    <div className="max-w-xs w-[calc(100vw/3)] border-2 border-slate-50">
      <h3 className={`${montserrat.className} text-xl font-bold`}>
        Lorem ipsum
      </h3>
      <img
        src=""
        alt=""
        className={clsx("h-40 bg-slate-500", { "bg-blue-500": index === 0 })}
      />
      <p className="text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
