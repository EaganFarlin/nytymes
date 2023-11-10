import clsx from "clsx";
import Link from "next/link";

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
  coveruri: string | null | number;
}) {
  return (
    <div
      className={clsx(
        "py-4",
        { "w-full max-w-[40rem]": index === 0 },
        { "w-full lg:max-w-xs lg:w-[30vw] lg:mr-4": index > 0 }
      )}
    >
      <Link href={`/post/${name}-${index}`}>
        <h3 className={`${montserrat.className} text-xl font-bold`}>{name}</h3>
      </Link>
      <p className="text-lg text-gray-700">{description}</p>
      <img
        src={coveruri?.toString()}
        alt=""
        className={clsx(
          "w-full h-[calc(12.5vw+25vh)] lg:min-h-[10rem] fill-none",
          { "lg:h-[10vw]": index > 0 },
          {
            "bg-gray-500": true,
          }
        )}
      />
    </div>
  );
}
