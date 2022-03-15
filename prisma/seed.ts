import { prisma } from '../src/database/prismaClient';

async function main() {
  await prisma.family.create({
    data: {
      name: 'noivos',
      users: {
        create: [
          { name: 'Aleixo', isConfirmed: true, isAdmin: true },
          { name: 'Bruna', isConfirmed: true, isAdmin: true },
        ],
      },
      access_code: 'gtr',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
