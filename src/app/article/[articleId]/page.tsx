import Link from "next/link";

const NewsArticle = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) => {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in language {lang}</p>

      <div>
        <Link href={`/article/${articleId}?lang=en`}>English</Link>
        <Link href={`/article/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
};

export default NewsArticle;
