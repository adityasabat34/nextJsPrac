"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <h1>Welcome to NextJS</h1>
      <Link href="/blog">Blog navigate</Link>
      <Link href="/products">navigate to product page</Link>

      <button onClick={() => router.push("/products")}>Place Order </button>

      <Link href="/article/breaking-news-123?lang=en">Read in Eng</Link>
      <Link href="/article/breaking-news-123?lang=fr">Read in France</Link>
    </>
  );
}
