import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const org1 = await prisma.organization.create({
      data: {
        name: "Nerdys Barber Shop",
      },
    });

    const uCarlos = await prisma.user.create({
      data: {
        email: "carlos@nerdys.com",
        name: "Carlos",
        lastName: "FadeMaster",
        phone: "584241111111",
        idNumber: "28195050",
        emailVerified: true,
        createdAt: new Date(),
      },
    });

    const uLuis = await prisma.user.create({
      data: {
        email: "luis@nerdys.com",
        name: "Luis",
        lastName: "TijerasLocas",
        phone: "584241111112",
        idNumber: "30214567",
        image: null,
        emailVerified: true,
        createdAt: new Date(),
      },
    });

    const uAna = await prisma.user.create({
      data: {
        email: "ana@nerdys.com",
        name: "Ana",
        lastName: "CorteFino",
        phone: "584241111113",
        idNumber: "19543210",
        image: null,
        emailVerified: true,
        createdAt: new Date(),
      },
    });

    const mCarlos = await prisma.member.create({
      data: {
        organizationId: org1.id,
        userId: uCarlos.id,
        isAdmin: true,
      },
    });
    const mLuis = await prisma.member.create({
      data: {
        organizationId: org1.id,
        userId: uLuis.id,
        isAdmin: false,
      },
    });
    const mAna = await prisma.member.create({
      data: {
        organizationId: org1.id,
        userId: uAna.id,
        isAdmin: false,
      },
    });

    await prisma.service.createMany({
      data: [
        {
          name: "Corte Clásico",
          description: "Corte tradicional para caballeros",
          price: 8.5,
          organizationId: org1.id,
        },
        {
          name: "Barba Deluxe",
          description: "Afeitado y arreglo de barba premium",
          price: 6.0,
          organizationId: org1.id,
        },
      ],
    });

    const cPedro = await prisma.customer.create({
      data: {
        name: "Pedro",
        lastName: "Ramírez",
        phone: "584241111211",
        organizationId: org1.id,
      },
    });
    await prisma.customer.createMany({
      data: [
        {
          name: "Juan",
          lastName: "Pérez",
          phone: "584241111212",
          organizationId: org1.id,
        },
        {
          name: "Sofía",
          lastName: "Gómez",
          phone: "584241111213",
          organizationId: org1.id,
        },
        {
          name: "María",
          lastName: "López",
          phone: "584241111214",
          organizationId: org1.id,
        },
      ],
    });

    await prisma.appointment.create({
      data: {
        scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 4),
        customerId: cPedro.id,
        staffMemberId: mCarlos.id,
        organizationId: org1.id,
      },
    });

    const org2 = await prisma.organization.create({
      data: {
        name: "Oasis Zen Spa",
        slug: "oasis-zen-spa",
        logo: "https://placehold.co/100x100?text=Oasis",
        metadata: "seed",
      },
    });

    const uValeria = await prisma.user.create({
      data: {
        email: "valeria@oasiszen.com",
        name: "Valeria",
        lastName: "RelajaciónZen",
        phone: "573001112233",
        idNumber: "21098765",
        image: null,
        emailVerified: true,
        createdAt: new Date(),
      },
    });

    const uMiguel = await prisma.user.create({
      data: {
        email: "miguel@oasiszen.com",
        name: "Miguel",
        lastName: "MasajeManos",
        phone: "573001112234",
        idNumber: "17894562",
        image: null,
        emailVerified: true,
        createdAt: new Date(),
      },
    });

    const mValeria = await prisma.member.create({
      data: {
        organizationId: org2.id,
        userId: uValeria.id,
        isAdmin: true,
      },
    });
    const mMiguel = await prisma.member.create({
      data: {
        organizationId: org2.id,
        userId: uMiguel.id,
        isAdmin: false,
      },
    });

    await prisma.service.createMany({
      data: [
        {
          name: "Masaje Sueco",
          description: "Masaje relajante de cuerpo completo",
          price: 25.0,
          organizationId: org2.id,
        },
        {
          name: "Facial de Lujo",
          description: "Tratamiento facial premium",
          price: 18.0,
          organizationId: org2.id,
        },
        {
          name: "Circuito Termal",
          description: "Acceso a sauna y jacuzzi",
          price: 15.0,
          organizationId: org2.id,
        },
      ],
    });

    const cLucia = await prisma.customer.create({
      data: {
        name: "Lucía",
        lastName: "Martínez",
        phone: "573001112241",
        organizationId: org2.id,
      },
    });
    await prisma.customer.createMany({
      data: [
        {
          name: "Andrés",
          lastName: "García",
          phone: "573001112242",
          organizationId: org2.id,
        },
        {
          name: "Elena",
          lastName: "Santos",
          phone: "573001112243",
          organizationId: org2.id,
        },
        {
          name: "Raúl",
          lastName: "Vega",
          phone: "573001112244",
          organizationId: org2.id,
        },
        {
          name: "Patricia",
          lastName: "Morales",
          phone: "573001112245",
          organizationId: org2.id,
        },
      ],
    });

    await prisma.appointment.create({
      data: {
        scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
        customerId: cLucia.id,
        staffMemberId: mValeria.id,
        organizationId: org2.id,
      },
    });

    const org3 = await prisma.organization.create({
      data: {
        name: "Inkspire Studio",
        slug: "inkspire-studio",
        logo: "https://placehold.co/100x100?text=Ink",
        metadata: "seed",
      },
    });

    const uDiego = await prisma.user.create({
      data: {
        email: "diego@inkspire.com",
        name: "Diego",
        lastName: "AgujaFina",
        phone: "5215512345678",
        idNumber: "33445566",
        image: null,
        emailVerified: true,
        createdAt: new Date(),
      },
    });

    const uCamila = await prisma.user.create({
      data: {
        email: "camila@inkspire.com",
        name: "Camila",
        lastName: "ArteVivo",
        phone: "5215512345679",
        idNumber: "44556677",
        image: null,
        emailVerified: true,
        createdAt: new Date(),
      },
    });

    const mDiego = await prisma.member.create({
      data: {
        organizationId: org3.id,
        userId: uDiego.id,
        isAdmin: true,
      },
    });
    const mCamila = await prisma.member.create({
      data: {
        organizationId: org3.id,
        userId: uCamila.id,
      },
    });

    await prisma.service.createMany({
      data: [
        {
          name: "Tatuaje Minimalista",
          description: "Diseños pequeños y delicados",
          price: 40.0,
          organizationId: org3.id,
        },
        {
          name: "Tatuaje Realista",
          description: "Obras de arte en la piel",
          price: 120.0,
          organizationId: org3.id,
        },
      ],
    });

    const cJorge = await prisma.customer.create({
      data: {
        name: "Jorge",
        lastName: "Navarro",
        phone: "5215512345680",
        organizationId: org3.id,
      },
    });
    await prisma.customer.createMany({
      data: [
        {
          name: "Marta",
          lastName: "Silva",
          phone: "5215512345681",
          organizationId: org3.id,
        },
        {
          name: "Esteban",
          lastName: "Ríos",
          phone: "5215512345682",
          organizationId: org3.id,
        },
      ],
    });

    await prisma.appointment.create({
      data: {
        scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 48), // +48h
        customerId: cJorge.id,
        staffMemberId: mDiego.id,
        organizationId: org3.id,
      },
    });
  } catch (error) {
    console.error("❌ Error en seed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
