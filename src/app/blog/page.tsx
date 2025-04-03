import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "blog",
  },
};
export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("loading");
    }, 2000);
  });
  return (
    <>
      <h1>hello world</h1>
      <Link href={`/`}>Back to home</Link>
    </>
  );
}
