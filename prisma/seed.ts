import { auth } from "../src/auth.js";

async function main() {
  try {
    const data = await auth.api.signUpEmail({
      body: {
        email: "carlos@nerdys.com",
        name: "Carlos",
        password: "123456789",
        lastName: "Bolano",
        idNumber: "12345678",
        phone: "584247153319",
      },
    });
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

main();
