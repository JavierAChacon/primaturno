import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const barberShop = await prisma.organization.create({
      data: {
        name: "Nerdys Barber Shop",
        staff: {
          create: [
            {
              name: "Carlos",
              last_name: "FadeMaster",
              phone: "584241111111",
              isAdmin: true,
            },
            { name: "Luis", last_name: "TijerasLocas", phone: "584241111112" },
            { name: "Ana", last_name: "CorteFino", phone: "584241111113" },
          ],
        },
        services: {
          create: [
            {
              name: "Corte Clásico",
              description: "Corte tradicional para caballeros",
              price: 8.5,
            },
            {
              name: "Barba Deluxe",
              description: "Afeitado y arreglo de barba premium",
              price: 6.0,
            },
          ],
        },
        customers: {
          create: [
            { name: "Pedro", last_name: "Ramírez", phone: "584241111211" },
            { name: "Juan", last_name: "Pérez", phone: "584241111212" },
            { name: "Sofía", last_name: "Gómez", phone: "584241111213" },
            { name: "María", last_name: "López", phone: "584241111214" },
          ],
        },
      },
      include: { staff: true, services: true, customers: true },
    });

    const spa = await prisma.organization.create({
      data: {
        name: "Oasis Zen Spa",
        staff: {
          create: [
            {
              name: "Valeria",
              last_name: "RelajaciónZen",
              phone: "573001112233",
              isAdmin: true,
            },
            { name: "Miguel", last_name: "MasajeManos", phone: "573001112234" },
          ],
        },
        services: {
          create: [
            {
              name: "Masaje Sueco",
              description: "Masaje relajante de cuerpo completo",
              price: 25.0,
            },
            {
              name: "Facial de Lujo",
              description: "Tratamiento facial premium",
              price: 18.0,
            },
            {
              name: "Circuito Termal",
              description: "Acceso a sauna y jacuzzi",
              price: 15.0,
            },
          ],
        },
        customers: {
          create: [
            { name: "Lucía", last_name: "Martínez", phone: "573001112241" },
            { name: "Andrés", last_name: "García", phone: "573001112242" },
            { name: "Elena", last_name: "Santos", phone: "573001112243" },
            { name: "Raúl", last_name: "Vega", phone: "573001112244" },
            { name: "Patricia", last_name: "Morales", phone: "573001112245" },
          ],
        },
      },
      include: { staff: true, services: true, customers: true },
    });

    const tattooStudio = await prisma.organization.create({
      data: {
        name: "Inkspire Studio",
        staff: {
          create: [
            {
              name: "Diego",
              last_name: "AgujaFina",
              phone: "5215512345678",
              isAdmin: true,
            },
            { name: "Camila", last_name: "ArteVivo", phone: "5215512345679" },
          ],
        },
        services: {
          create: [
            {
              name: "Tatuaje Minimalista",
              description: "Diseños pequeños y delicados",
              price: 40.0,
            },
            {
              name: "Tatuaje Realista",
              description: "Obras de arte en la piel",
              price: 120.0,
            },
          ],
        },
        customers: {
          create: [
            { name: "Jorge", last_name: "Navarro", phone: "5215512345680" },
            { name: "Marta", last_name: "Silva", phone: "5215512345681" },
            { name: "Esteban", last_name: "Ríos", phone: "5215512345682" },
          ],
        },
      },
      include: { staff: true, services: true, customers: true },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
