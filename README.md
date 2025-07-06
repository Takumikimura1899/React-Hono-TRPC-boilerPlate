# tree

/monorepo
├── apps
│ ├── web/ # フロントエンド (Vite + React)
│ └── api/ # バックエンド (Hono)
├── packages
│ ├── ui/ # 共通 UI コンポーネント (shadcn/ui)
│ └── tsconfig/ # TypeScript 共通設定
├── biome.json # ✅ Biome の全体設定ファイル
├── package.json # ルートの package.json
└── pnpm-workspace.yaml
