# React+Hono TRPC ボイラープレート

Vite, Hono, tRPC, Prisma を使用した、モダンで完全な型安全性を実現するフルスタック TypeScript ボイラープレートです。

## 主な特徴 ✨

- 完全な型安全性: Prisma(DB) -> tRPC(API) -> React(フロントエンド)まで、エンドツーエンドで型が保証されます。

- pnpm ワークスペースによるモノレポ構成: フロントエンドとバックエンドのコードを効率的に管理できます。

- 高速な開発体験: Vite, Hono, Biome といったモダンで高速なツールチェインを採用しています。

- シンプルな DB セットアップ: Prisma と SQLite により、ローカルですぐにデータベース開発を開始できます。

- モダンなスタイリング: Tailwind CSS によるユーティリティファーストなスタイリングを採用しています。

## 技術スタック 🛠️

| カテゴリ           | 技術                                    |
| ------------------ | --------------------------------------- |
| モノレポ           | pnpm workspace                          |
| フロントエンド     | React, Vite, TypeScript, TanStack Query |
| ルーティング       | Tanstack Router                         |
| バックエンド       | Hono (on Node.js)                       |
| API                | tRPC                                    |
| DB / ORM           | Prisma, SQLite                          |
| Linter / Formatter | Biome                                   |
| スタイリング       | Tailwind CSS, shadcn/ui                   |

## tree

```shell
/monorepo
├── apps
│ ├── web/ # フロントエンド (Vite + React)
│ └── api/ # バックエンド (Hono)
├── packages
│ └── tsconfig/ # TypeScript 共通設定
├── biome.json # ✅ Biome の全体設定ファイル
├── package.json # ルートの package.json
└── pnpm-workspace.yaml
```

## セットアップ手順 🚀

1. 依存関係のインストール
   プロジェクトのルートディレクトリで以下のコマンドを実行します。

   `pnpm install`

2. データベースのセットアップ
   API プロジェクトのマイグレーションを実行して、ローカルに SQLite データベースとテーブルを作成します。

   `pnpm --filter api migrate dev --name init`

3. テストデータ投入

   `pnpm --filter api db seed`

## 使い方・主なコマンド 🖥️

### バックエンドサーバーの起動

`pnpm --filter api dev`

### フロントエンドサーバーの起動

`pnpm --filter web dev`
