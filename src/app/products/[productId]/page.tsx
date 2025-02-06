export default async function ProductList({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <>
      <h1>Single Products {productId}</h1>
    </>
  );
}
