import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";

const site = process.env.SITE_URL || "https://nashdev255.github.io";
const base = process.env.BASE_PATH || "/nash-portfolio-2026";

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [
    expressiveCode({
      themes: ["github-light", "github-dark"],
      styleOverrides: {
        borderRadius: "0.75rem",
        codeFontFamily: "var(--font-mono)",
      },
    }),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "directory",
  },
});
