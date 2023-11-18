import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col text-center">
      <p className="mb-2 text-3xl">404 Not Found</p>
      <Link
        href="/"
        className="text-xl border-2 border-gray-500 p-2 rounded-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
}
