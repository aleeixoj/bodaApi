import { prisma } from '@database/prismaClient';

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
  await prisma.family.create({
    data: {
      name: 'Carvalho',
      users: {
        create: [{ name: 'Ivoneide' }, { name: 'Janaina' }],
      },
      access_code: '350z',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Godinho Kmiecik',
      users: {
        create: [{ name: 'Aleixo' }, { name: 'Maria' }],
      },
      access_code: 'brasilia',
    },
  });
  await prisma.family.create({
    data: {
      name: 'de Sá',
      users: {
        create: [{ name: 'Edmar' }, { name: 'Sandra' }],
      },
      access_code: 'vectra',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Gonçalves de Sá ',
      users: {
        create: [{ name: 'Iago' }, { name: 'Fernanda' }],
      },
      access_code: 'civic',
    },
  });
  await prisma.family.create({
    data: {
      name: 'dos Santos de Sá',
      users: {
        create: [
          { name: 'Adriano' },
          { name: 'Jessica' },
          { name: 'Sara' },
          { name: 'Lorenzo' },
          { name: 'Davi' },
        ],
      },
      access_code: 'fusion',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Vieira de Sá',
      users: {
        create: [{ name: 'Zuleida' }],
      },
      access_code: 'renegade',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Vieira de Sá',
      users: {
        create: [{ name: 'Zilda' }],
      },
      access_code: 'compass',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Vieira de Sá',
      users: {
        create: [{ name: 'Vanilde' }, { name: 'Marcos' }],
      },
      access_code: 'tiggo',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Vieira de Rezende',
      users: {
        create: [{ name: 'Guilherme' }, { name: 'Gessica' }],
      },
      access_code: 'c4_pallas',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Vieira de Sá',
      users: {
        create: [{ name: 'Cido' }, { name: 'Sueli' }],
      },
      access_code: 'air_cross',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Vieira de Sá',
      users: {
        create: [
          { name: 'Luciana' },
          { name: 'Márcio' },
          { name: 'Vitoria' },
          { name: 'Alisson' },
        ],
      },
      access_code: 'twister',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Vieira de Sá',
      users: {
        create: [{ name: 'Sergio' }, { name: 'Silvia' }],
      },
      access_code: 'camaro',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Ferreira',
      users: {
        create: [
          { name: 'Mauricio' },
          { name: 'Liliane' },
          { name: 'Tiffany' },
          { name: 'Kielse' },
          { name: 'Kaique' },
        ],
      },
      access_code: 'supra',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Ferreira Martins',
      users: {
        create: [
          { name: 'Josi' },
          { name: 'Jonathan' },
          { name: 'Lorena' },
          { name: 'Romeu' },
        ],
      },
      access_code: 'golf',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Ferreira',
      users: {
        create: [
          { name: 'Luciana' },
          { name: 'Adriano' },
          { name: 'Nicolas' },
          { name: 'Pedro' },
        ],
      },
      access_code: 'c63',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Ferreira',
      users: {
        create: [{ name: 'Wellinton' }, { name: 'Sibeli' }],
      },
      access_code: 'cayenne',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Ferreira',
      users: {
        create: [{ name: 'Willian' }, { name: 'Helo' }],
      },
      access_code: 'bmw_x5',
    },
  });
  await prisma.family.create({
    data: {
      name: 'de Sá',
      users: {
        create: [{ name: 'Edmar Junior' }, { name: 'Luna' }],
      },
      access_code: 'bmw_320i',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Ferreira',
      users: {
        create: [{ name: 'Raul' }],
      },
      access_code: 'bmw_x4',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Ramalhete',
      users: {
        create: [{ name: 'Manu' }],
      },
      access_code: 'bmw_z4',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Ramalhete',
      users: {
        create: [{ name: 'Carolina' }],
      },
      access_code: 'bmw_m8',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Carvalho',
      users: {
        create: [{ name: 'Natalie' }, { name: 'Gui' }, { name: 'Gael' }],
      },
      access_code: 'bmw_m3',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Carvalho',
      users: {
        create: [{ name: 'Joice' }, { name: 'Luiz' }],
      },
      access_code: 'bmw_m4',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Carvalho',
      users: {
        create: [{ name: 'Fran' }, { name: 'Fernando' }, { name: 'Lorena' }],
      },
      access_code: 'bmw_i4',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Carvalho',
      users: {
        create: [{ name: 'Fernanda' }],
      },
      access_code: 'bmw_m5',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Carvalho',
      users: {
        create: [{ name: 'Cleide' }, { name: 'Verlei' }],
      },
      access_code: 'bmw_x6',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Carvalho',
      users: {
        create: [{ name: 'Patricia' }],
      },
      access_code: 'versa',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Carvalho',
      users: {
        create: [
          { name: 'Neuza' },
          { name: 'Juarez' },
          { name: 'Dona Davina' },
        ],
      },
      access_code: 'sentra',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Carvalho',
      users: {
        create: [
          { name: 'Evelyn' },
          { name: 'Gustavo' },
          { name: 'Arthur' },
          { name: 'Miguel' },
        ],
      },
      access_code: 'jetta',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Godinho Kmiecik',
      users: {
        create: [
          { name: 'Alexsander' },
          { name: 'Cintia' },
          { name: 'Gabriele' },
          { name: 'Rafael' },
        ],
      },
      access_code: 'audi_a3',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Godinho Kmiecik',
      users: {
        create: [
          { name: 'Alexandre' },
          { name: 'Vana' },
          { name: 'Eduardo' },
          { name: 'Gustavo' },
          { name: 'Larissa' },
          { name: 'Felipe' },
          { name: 'Matheus' },
        ],
      },
      access_code: 'audi_tt',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Godinho Kmiecik',
      users: {
        create: [
          { name: 'Alesandra' },
          { name: 'Vandi' },
          { name: 'Nicolly' },
          { name: 'Nicollas' },
        ],
      },
      access_code: 'audi_a4',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Godinho',
      users: {
        create: [{ name: 'Ana' }, { name: 'Fernando' }, { name: 'Felipe' }],
      },
      access_code: 'audi_a5',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Kmiecik',
      users: {
        create: [{ name: 'Ana' }],
      },
      access_code: 'audi_s3',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Godinho',
      users: {
        create: [{ name: 'Steffany' }, { name: 'Fabiano' }],
      },
      access_code: 'mustang',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Kmiecik',
      users: {
        create: [
          { name: 'Ilzorete' },
          { name: 'Moacir' },
          { name: 'Leticia' },
          { name: 'Victor' },
        ],
      },
      access_code: 'ford_gt',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Godinho',
      users: {
        create: [{ name: 'Fatinha' }, { name: 'Russo' }],
      },
      access_code: 'audi_q5',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Godinho',
      users: {
        create: [{ name: 'Regina' }, { name: 'Nelson' }],
      },
      access_code: 'audi_a6',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Godinho',
      users: {
        create: [
          { name: 'Marcos' },
          { name: 'Suzane' },
          { name: 'Jean' },
          { name: 'Leticia' },
        ],
      },
      access_code: 'audi_q8',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Godinho',
      users: {
        create: [
          { name: 'Roberto' },
          { name: 'Emili' },
          { name: 'Roberta' },
          { name: 'Willian' },
        ],
      },
      access_code: 'audi_a7',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Mercedes',
      users: {
        create: [{ name: 'Maria' }, { name: 'Marlon' }],
      },
      access_code: 'audi_rs6',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Farias',
      users: {
        create: [{ name: 'Silmara' }, { name: 'Marido' }, { name: 'filho' }],
      },
      access_code: 'audi_rs5',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Rodrigues',
      users: {
        create: [{ name: 'Gustavo' }, { name: 'Ana' }],
      },
      access_code: 'audi_rs7',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Matosinhos',
      users: {
        create: [{ name: 'Alisson' }],
      },
      access_code: 'audi_rs4',
    },
  });
  await prisma.family.create({
    data: {
      name: 'Oliveira',
      users: {
        create: [{ name: 'Agenor' }],
      },
      access_code: 'audi_rs',
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
