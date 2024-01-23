"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import styles from "@/app/posts/[category]/[id]/cover-img-max-min-button.module.css";
import clsx from "clsx";

export default function CoverImgMaxMinBtn({
  isMin,
  category,
  id,
}: {
  isMin: boolean;
  category: string;
  id: string;
}) {
  return (
    <Link
      className={clsx(
        "h-0 overflow-visible self-end top-4 right-4",
        isMin && "absolute",
        !isMin && "relative"
      )}
      href={`/posts/${category}/${id}${!isMin ? "/cover-img" : ""}`}
    >
      <FontAwesomeIcon
        icon={isMin ? faMinimize : faMaximize}
        className={styles.faCoverImgExpand}
      />
    </Link>
  );
}
