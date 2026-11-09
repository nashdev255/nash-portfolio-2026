import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const articles = await getCollection("articles", ({ data }) => !data.draft);
  return rss({
    title: "nash — Articles",
    description: "Technical articles, development logs, and notes.",
    site: context.site!,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/articles/${article.id}/`,
    })),
  });
};
