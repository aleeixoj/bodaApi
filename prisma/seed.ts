import { prisma } from '../src/database/prismaClient';

async function main() {
  await prisma.family.create({
    data: {
      name: 'noivos',
      users: {
        create: [
          { name: 'Aleixo', phone: '41988602657', isAdmin: true },
          { name: 'Bruna', phone: '41992663785', isAdmin: true },
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
