import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando Seeder (Inyección de datos base)...');

  // Crear Usuario Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@tribusport.mx' },
    update: {},
    create: {
      email: 'admin@tribusport.mx',
      password: 'password123', // En producción sería encriptado
      name: 'Admin TribuSport',
      role: 'ADMIN',
    },
  });

  // Crear Categorías
  const catFaldas = await prisma.category.upsert({
    where: { slug: 'faldas' },
    update: {},
    create: { name: 'Faldas y Shorts', slug: 'faldas' },
  });

  // Crear Producto de Prueba (Falda) con sus Variantes
  const falda = await prisma.product.upsert({
    where: { slug: 'falda-pro-blanca' },
    update: {},
    create: {
      title: 'Falda Padel Pro Blanca',
      slug: 'falda-pro-blanca',
      description: 'Falda de alto rendimiento con short interno y bolsillo para pelotas.',
      categoryId: catFaldas.id,
      variants: {
        create: [
          { size: 'S', color: 'Blanco', sku: 'FAL-WHT-S', price: 950, stock: 10 },
          { size: 'M', color: 'Blanco', sku: 'FAL-WHT-M', price: 950, stock: 5 },
          { size: 'L', color: 'Blanco', sku: 'FAL-WHT-L', price: 950, stock: 2 },
        ],
      },
    },
  });

  console.log('Datos inyectados exitosamente.');
  console.log({ admin, catFaldas, falda });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
