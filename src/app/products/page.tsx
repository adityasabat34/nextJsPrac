import Link from "next/link";

export default function Products({ productId = 100 }) {
  return (
    <>
      <Link href={"/products"}>
        <h1>All products list</h1>
      </Link>
      <Link href={`products/${productId}`} replace>
        <h2>Product 1</h2>
      </Link>
      <Link href={`/`}>back to Home</Link>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
      <h2>Product 4</h2>
      <h2>Product 5</h2>
      <Link href={"/"}>Home</Link>
    </>
  );
}
