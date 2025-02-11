import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to NextJS</h1>
      <Link href="/blog">Blog navigate</Link>
      <Link href="/products">navigate to product page</Link>
    </>
  );
}
