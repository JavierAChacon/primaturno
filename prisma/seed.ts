import { auth } from "../src/auth.js";

async function main() {
  try {
    const marco = await auth.api.signUpEmail({
      body: {
        email: "marco@nerdys.com",
        name: "Marco",
        lastName: "Plata",
        password: "123456789",
        idNumber: "87654321",
        phone: "584242222222",
      },
    });
    const userId = marco?.user?.id;

    const organization = await auth.api.createOrganization({
      body: { name: "Nerdys Barbershop", userId, slug: "nerdys-barbershop" },
    });

    const users = [
      {
        email: "carlos@nerdys.com",
        name: "Carlos",
        lastName: "Bolano",
        password: "123456789",
        idNumber: "12345678",
        phone: "584241111111",
      },
      {
        email: "jose@nerdys.com",
        name: "Jose",
        lastName: "Perez",
        password: "nerdysbarber1",
        idNumber: "23456789",
        phone: "58424333333",
      },
      {
        email: "ana@nerdys.com",
        name: "Ana",
        lastName: "Gomez",
        password: "nerdysbarber2",
        idNumber: "34567890",
        phone: "584244444444",
      },
      {
        email: "sofia@nerdys.com",
        name: "Sofia",
        lastName: "Lopez",
        password: "nerdysbarber3",
        idNumber: "45678901",
        phone: "584245555555",
      },
    ];

    for (const user of users) {
      await auth.api.signUpEmail({ body: user });
    }
  } catch (e) {
    console.error(e);
  }
}

main();
