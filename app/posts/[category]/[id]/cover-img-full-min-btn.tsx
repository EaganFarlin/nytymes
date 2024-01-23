"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import styles from "@/app/posts/[category]/[id]/cover-img-full-min-button.module.css";

export default function CoverImgFullMinBtn({
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
      className="h-0 overflow-visible self-end relative top-4 right-4"
      href={`/posts/${category}/${id}/cover-img`}
    >
      <FontAwesomeIcon
        icon={isMin ? faMinimize : faMaximize}
        className={`${styles.faCoverImgExpand} bg-white`}
      />
    </Link>
  );
}
