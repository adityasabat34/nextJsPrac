import { Metadata } from "next";
type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((res) => {
    setTimeout(() => {
      res(`iPhone ${id}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

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
