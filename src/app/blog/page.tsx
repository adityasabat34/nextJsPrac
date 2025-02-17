import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>hello world</h1>
      <Link href={`/`}>Back to home</Link>
    </>
  );
}
