import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany();

  console.log('Seeding...');

  await prisma.post.createMany({
    data: [
      {
        title: 'はじめての投稿',
        content: 'これはPrisma Seedによって作成された最初の投稿です。',
      },
      {
        title: 'tRPCとReactの連携',
        content: '型安全なAPI通信は素晴らしい体験です。',
      },
      {
        title: 'モノレポのメリット',
        content: 'コードの共通化と管理がとても楽になります。',
      },
    ],
  });

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
