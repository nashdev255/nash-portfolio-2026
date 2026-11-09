# Portfolio Starter

Astro 7 / Tailwind CSS 4 / TypeScript を中心にした、静的ポートフォリオサイトのスターターテンプレートです。デザインは、淡いブルーグレーを基調にした **Neumorphism（ニューモーフィズム）** を採用しています。

## Requirements

- Node.js `22.23.4` 以上（Node.js 22 LTS 推奨）
- npm 10 以上
- Docker Desktop（Dockerで起動する場合）

Astro 7の現行要件に合わせ、Node.js 22.23.4以上を指定しています。Nodeのバージョンは `.nvmrc` と `package.json` の `engines` を参照してください。

## 1. Local setup (Windows / PowerShell)

```powershell
# ZIPを展開したディレクトリに移動
cd portfolio-starter

# Node / npm のバージョン確認
node -v
npm -v

# 依存関係のインストール
npm ci
# package-lock.json に固定された依存関係をインストールします。

# 開発サーバー起動
npm run dev
```

ブラウザで http://localhost:4321 を開きます。

## 2. Docker setup

```powershell
docker compose up --build
```

http://localhost:4321 で確認できます。停止する場合:

```powershell
docker compose down
```

## 3. Useful commands

| Command | Purpose |
|---|---|
| `npm run dev` | 開発サーバー |
| `npm run check` | Astro / TypeScript診断 |
| `npm run lint` | ESLint |
| `npm run format` | Prettierで整形 |
| `npm run format:check` | 整形チェック |
| `npm run test:unit` | Vitest |
| `npm run build` | 静的ビルド + Pagefind index |
| `npm run preview` | ビルド結果の確認 |
| `npm run test:e2e` | Playwright + axe |

初回のE2Eテスト前にブラウザをインストールします:

```powershell
npx playwright install chromium
```

## 4. Design system — Neumorphism

`src/styles/global.css` にデザイントークンと共通UIスタイルをまとめています。

- Base: `#e9edf3`（ブルーグレー）
- Text: `#273142`（濃いスレート）
- Accent: `#5545a5`（パープル）
- Raised surface: 明るい影と暗い影を組み合わせた浮き上がり表現
- Inset surface: 内側の影を使った押し込み表現

共通クラスは `neu-panel` / `neu-card` / `neu-inset` / `neu-button` / `neu-button-primary` / `neu-chip` です。新しいページやコンポーネントでもこれらを再利用すると、デザインに統一感を保てます。影だけに依存せず、文字色・境界線・フォーカスリングでも状態を伝える設計にしています。

## 5. Personalize the site

最初に以下を変更してください。

1. `src/layouts/BaseLayout.astro` の `YOUR NAME` とGitHub URL
2. `src/pages/index.astro` のヒーロー文、Focus、Currently
3. `src/pages/about.astro` のプロフィール・経歴・価値観
4. `src/pages/contact.astro` のメールアドレスとSNS
5. `src/pages/uses.astro` の開発環境
6. `src/content/works/` のサンプル作品
7. `src/content/articles/` のサンプル記事

## 6. Add an article

`src/content/articles/` に `.md` または `.mdx` を追加します。

```md
---
title: "記事タイトル"
description: "記事の概要"
pubDate: 2026-11-08
category: "Engineering"
tags: ["Astro", "TypeScript"]
draft: false
---

# 見出し

本文を書きます。
```

`draft: true` の記事は一覧・公開ページに含まれません。

MDXでは `src/components/article/` のAstroコンポーネントをimportして利用できます。サンプルの `Callout.astro` を参照してください。

## 7. Add a work

`src/content/works/` にMDXを追加します。

```md
---
title: "Project name"
description: "プロジェクトの概要"
date: 2026-11-08
role: "Design & Development"
stack: ["Astro", "TypeScript"]
category: "Web"
featured: true
---

## Background

制作背景を書きます。
```

## 8. GitHub Pages deployment

1. GitHubにリポジトリを作成して `main` ブランチへpushします。
2. GitHubリポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定します。
3. `deploy.yml` が `main` へのpushでビルド・デプロイします。

### Project site と User site

このテンプレートは通常のProject site（`https://OWNER.github.io/REPOSITORY/`）を想定し、Actionsで `BASE_PATH` を自動設定します。

`https://OWNER.github.io/` 直下で公開するUser siteの場合は、`deploy.yml` の `BASE_PATH` を `/` に変更してください。

独自ドメインの場合は `SITE_URL` を独自ドメインに変更し、必要に応じて `public/CNAME` を追加します。

## 8. Architecture notes

- Astro pages/components are server-rendered to static HTML at build time.
- No React runtime, database, or server API is included.
- Tailwind CSS v4 is integrated through `@tailwindcss/vite`.
- MDX content is validated through Astro Content Collections schemas.
- Expressive Code handles code blocks at build time.
- Pagefind builds a static search index after the Astro build. Search UI can be added as a separate component when needed.
- Three.js, Motion, and GSAP are intentionally not included in the initial dependency set. Add only the library needed when a concrete visual interaction is designed (for example, `npm install three motion`); load 3D code lazily and provide a static fallback.
- Reduced-motion preferences and keyboard focus styles are included in the base stylesheet.

## 9. Before publishing

- Replace all placeholder identity/contact information.
- Add real project descriptions and screenshots with meaningful alt text.
- Check all outbound links.
- Run `npm run check`, `npm run lint`, `npm run test:unit`, `npm run build`, and `npm run test:e2e`.
- Test keyboard navigation and at least one screen reader manually.
- Review the built site on mobile and desktop.
